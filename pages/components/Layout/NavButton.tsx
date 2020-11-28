import Link from "next/link";
import React from 'react'

type Props = {
    path:string;
    icon:string;
    label:string;
}

const NavButton = (props: Props) => (
    <li className="nav-item mr-3">
        <Link href={props.path}>
            <div className="NavButton">
                <div className="Icon fas fa-fw" >{props.icon}</div>
                <span className="Label">{props.label}</span>
            </div>
        </Link>
    </li>
);

export default NavButton;