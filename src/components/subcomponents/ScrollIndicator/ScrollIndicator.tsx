"use client"
import { useEffect } from "react"
import styles from "./ScrollIndicator.module.css"

const ScrollIndicator = () => {

    const onScroll = () => {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        const progressIndicator = document.getElementById("scrollIndicatorBar")
        if(progressIndicator){
            progressIndicator.style.width = scrolled + "%";
        }
    }

    useEffect(() => {
        window.onscroll = function () { onScroll() };

        return window.onscroll = function () { onScroll() };
    }, [])

    return (
        <div className={styles.container}>
        <div className={styles.progress_container}>
            <div className={styles.progress_bar} style={{backgroundColor: "var(--secondary-color)"}} id="scrollIndicatorBar"></div>
        </div>
        </div>
    )
}

export default ScrollIndicator