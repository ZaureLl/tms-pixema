import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './ButtonSwitcher.module.scss';

type ButtonSwitcherProps = {
    values: string[];
    selectedValue: string;
    onChange: (value: string) => void;
};

const ButtonSwitcher: React.FC<ButtonSwitcherProps> = ({
    values,
    selectedValue,
    onChange,
}) => {
    const [selected, setSelected] = useState(selectedValue);

    const handleClick = (value: string) => {
        setSelected(value);
        onChange(value);
    };

    return (
        <div className={styles.buttonSwitcher}>
            {values.map((value) => (
                <button
                    key={value}
                    className={classNames(styles.button, {
                        [styles.selected]: value === selected,
                    })}
                    onClick={() => handleClick(value)}
                >
                    {value}
                </button>
            ))}
        </div>
    );
};

export default ButtonSwitcher;
