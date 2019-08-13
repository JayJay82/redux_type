import React, {useState} from 'react';
import './search-bar.css';


interface SearchBarProps {
    onChange: (value: string) => void
}


export const SearchBar : React.FC<SearchBarProps> = (Props : SearchBarProps) => {
    const [state, setState] = useState({value : "" });
    
    const handleChange = (e : React.FormEvent<HTMLInputElement>) => {
        setState({value : e.currentTarget.value});
        Props.onChange(e.currentTarget.value);
    }
    return (
            <div className="search-bar">
                <input
                 type="text" value = {state.value}
                 onChange = {(e) => handleChange(e)}
                />
            </div>
    )
}