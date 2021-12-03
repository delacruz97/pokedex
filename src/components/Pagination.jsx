import React from "react";
import styles from "../styles/Pagination.module.css";


const Pagination = (props) => {
    const {onLeftClick, onRightClick, page, totalPages} = props;
    return (
        <div className={styles.pagination}>
            <button onClick={onLeftClick}>
                <div>◀</div>
            </button>
            <div>{page} de {totalPages}</div>
            <button>
                <div>▶</div>
            </button>
            
        </div>
    )
}

export default Pagination;
