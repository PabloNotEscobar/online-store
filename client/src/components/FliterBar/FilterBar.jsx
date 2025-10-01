import React from 'react';
import classes from './FilterBar.module.css'
import TypeBar from "../TypeBar";
import BrandBar from "../BrandBar";

const FilterBar = () => {
    return (
        <div className={classes.container}>
            <div className={classes.filters}>
                <TypeBar/>
                <BrandBar/>
            </div>
        </div>
    );
};

export default FilterBar;