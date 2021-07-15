import {useState,useRef, useEffect} from 'react';

/*functions*/
function throttling(callback, delay) {
    let timer = Date.now();

    return function () {
        if(timer + delay - Date.now() < 0){
            callback();
            timer = Date.now()
        }
    }
}

/*components*/
function LoaderList(props) {
    const {classes, url} = props;
    return(
        <img className={classes ? classes : "infinite__scroll--loader"} src={url} alt="loader"/>
    )
}

const InfiniteListThree = (props) => {
    const {
            numberPerPage,
            size,page,
            setPage, 
            triggerAt,
            children,
            datas,
            loaderListClasses, 
            loaderList
        } = props;
    

    /*states*/
    const [isLoaded, setIsLoaded] = useState(false);
    const [newDatas, setNewDatas] = useState(datas);

    /*constantes*/
    const MAX_PAGES = typeof size === 'number' ? Math.ceil(size / numberPerPage) : 0;
   

    /*refs*/
    let listRef = useRef();
    let elmtRef = useRef();
    let listBottom = useRef();
    let elmtBottom = useRef();

    if(children.type === 'ul'){
        children.ref = listRef;
    }

    if(typeof triggerAt === 'number' && children.props.children){
        if(triggerAt < children.props.children.length - 1){
            children.props.children[triggerAt * page].ref = elmtRef;
        }
    
        if(triggerAt >= children.props.children.length - 1){
            children.props.children[children.props.children.length - 1].ref = elmtRef;
        }
    }

    /*handlers*/
    const handleScroll = (e) => {
        listBottom.current = Number(listRef.current.getBoundingClientRect().bottom);
        elmtBottom.current = Number(elmtRef.current.getBoundingClientRect().bottom);

        if(listBottom.current - elmtBottom.current > 0 && page < MAX_PAGES){
            setIsLoaded(false);
        }

        if(page === MAX_PAGES){
            setIsLoaded(true);
        }
    }
            
    /*effect*/
    useEffect(() => {
       console.log(datas)
       setIsLoaded(true);
    },[datas]);

    useEffect(() => {
        if(isLoaded === false && page < MAX_PAGES){
            setPage(page + 1);
        }
    }, [isLoaded]);

    useEffect(() => {
        window.addEventListener('scroll',handleScroll, true);
        return window.addEventListener('scroll',handleScroll);
    },[]);

    return (
        <>  
            {children}
            <LoaderList classes={!isLoaded ? loaderListClasses : "d-none"} url={loaderList}/>
        </>
    )
};

export default InfiniteListThree;
