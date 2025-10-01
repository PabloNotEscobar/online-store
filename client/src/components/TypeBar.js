import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Dropdown, ListGroup} from "react-bootstrap";
import {setSelectionRange} from "@testing-library/user-event/dist/utils";

const TypeBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Dropdown className="" >
            <Dropdown.Toggle>{device.selectedType.name || 'Выберите тип'}</Dropdown.Toggle>
            <Dropdown.Menu>
                {device.types.map(type =>
                    <Dropdown.Item
                        style={{cursor: "pointer"}}
                        active={type.id === device.selectedType.id}
                        key={type.id}
                        onClick={() => device.setSelectedType(type)}
                    >
                        {type.name}
                    </Dropdown.Item>
                )}

            </Dropdown.Menu>
        </Dropdown>
    );
});
export default TypeBar;