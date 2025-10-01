import React, {useContext} from 'react';
import {Context} from "../index";
import {Card, Col, Dropdown, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Dropdown>
            <Dropdown.Toggle>{device.selectedBrand.name || 'Выберите бренд'}</Dropdown.Toggle>
            <Dropdown.Menu>
                {device.brands.map(brand =>
                    <Dropdown.Item
                        key={brand.id}
                        active={brand.id === device.selectedBrand.id}
                        style={{ cursor: 'pointer' }}
                        onClick={() => device.setSelectedBrand(brand)}
                    >
                        {brand.name}
                    </Dropdown.Item>
                )}
            </Dropdown.Menu>
        </Dropdown>

    );
})

export default BrandBar;