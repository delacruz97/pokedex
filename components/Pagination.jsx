import React from "react";
import styles from "../styles/Pagination.module.css";


const Pagination = (props) => {
    const {onLeftClick, onRightClick, Page, totalPages} = props;
    return (
        <div className={styles.pagination}>
            <button onClick={onLeftClick}>
                <div>◀</div>
            </button>
            <div>{Page} de {totalPages}</div>
            <button onClick={onRightClick}>
                <div>▶</div>
            </button>
            
        </div>
    )
}

export default Pagination;
