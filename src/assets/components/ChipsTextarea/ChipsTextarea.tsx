import { useState, useRef, KeyboardEvent, useEffect } from "react";
import styles from "./ChipsTextarea.module.scss";

type ChipsTextareaProps = {
    value: string;
    placeholder: string;
    onChange: (value: string) => void;
};

const ChipsTextarea = ({ value, placeholder, onChange }: ChipsTextareaProps) => {
    const [chips, setChips] = useState<string[]>(splitChipsValue(value));
    const inputRef = useRef<HTMLTextAreaElement>(null);

    function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
        const value = event.currentTarget.value.trim();
        if (event.key === "Enter" || event.key === ",") {
            if (value) {
                setChips([...chips, value]);
                event.currentTarget.value = "";
                onChange([...chips, value].join(", "));
            }
            event.preventDefault();
        } else if (event.key === "Backspace" && !value) {
            setChips(chips.slice(0, -1));
            onChange(chips.slice(0, -1).join(", "));
        }
    };

    function handleChipClick(index: number) {
        setChips(chips.filter((_, i) => i !== index));
        onChange(chips.filter((_, i) => i !== index).join(", "));
        inputRef.current?.focus();
    };

    function splitChipsValue(value: string) {
        if (value) {
            return value.split(", ")
        }
        return [];
    }

    useEffect(() => {
        setChips(splitChipsValue(value));
    }, [value]);

    return (
        <div className={styles.chipsTextareaContainer}>
            <div className={styles.chipsContainer}>
                {chips.map((chip, index) => (
                    <div key={index} className={styles.chip} onClick={() => handleChipClick(index)}>
                        {chip}
                    </div>
                ))}
                <textarea
                    ref={inputRef}
                    className={styles.textarea}
                    placeholder={placeholder}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </div>
    );
};

export default ChipsTextarea;