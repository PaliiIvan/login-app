import { useState, useRef, useEffect, useCallback } from "react";
import { KEYS } from "../../utils/constants";
import {
  Arrow,
  CustomSelect,
  HiddenSelect,
  Option,
  OptionContent,
  OptionsDropdown,
  OptionText,
  SelectContainer,
  SelectedContent,
  SelectTrigger,
} from "./styles";

export type Option = {
  value: string;
  label: string;
  formatLabel?: (label: string) => React.ReactNode;
};

type SelectProps = {
  options: Option[];
  value: Option;
  onChange: (value: Option) => void;
};

export const Select = ({ options, value, onChange }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = useCallback(
    (option: Option) => {
      onChange(option);
      setIsOpen(false);
    },
    [onChange, setIsOpen],
  );

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case KEYS.ENTER:
      case KEYS.SPACE:
        event.preventDefault();
        setIsOpen(!isOpen);
        break;
      case KEYS.ESCAPE:
        setIsOpen(false);
        break;
      case KEYS.ARROW_DOWN:
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          const currentIndex = options.findIndex(
            (option) => option.value === value.value,
          );
          const nextIndex = (currentIndex + 1) % options.length;
          onChange(options[nextIndex]);
        }
        break;
      case KEYS.ARROW_UP:
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          const currentIndex = options.findIndex(
            (option) => option.value === value.value,
          );
          const prevIndex =
            currentIndex === 0 ? options.length - 1 : currentIndex - 1;
          onChange(options[prevIndex]);
        }
        break;
    }
  };

  return (
    <SelectContainer>
      <HiddenSelect
        value={value.value}
        onChange={(e) => {
          const option = options.find((opt) => opt.value === e.target.value);
          if (option) {
            onChange(option);
          }
        }}
        aria-hidden="true"
        tabIndex={-1}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </HiddenSelect>

      <CustomSelect
        open={isOpen}
        ref={selectRef}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-labelledby="select-label"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <SelectTrigger
          onClick={() => setIsOpen(!isOpen)}
          role="button"
          aria-label="Select..."
        >
          <SelectedContent>
            {value.formatLabel ? value.formatLabel(value.label) : value.label}
          </SelectedContent>
          <Arrow>⌵</Arrow>
        </SelectTrigger>

        {isOpen && (
          <OptionsDropdown role="listbox">
            {options.map((option) => (
              <Option
                key={option.value}
                selected={value.value === option.value}
                onClick={() => handleSelect(option)}
                role="option"
                aria-selected={value.value === option.value}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === KEYS.ENTER || e.key === KEYS.SPACE) {
                    e.preventDefault();
                    handleSelect(option);
                  }
                }}
              >
                <OptionContent>
                  {/* <span className="flag-icon">
                    <img src={option.flag} alt={option.flagAlt} />
                  </span> */}
                  <OptionText>
                    {option.formatLabel
                      ? option.formatLabel(option.label)
                      : option.label}
                  </OptionText>
                </OptionContent>
              </Option>
            ))}
          </OptionsDropdown>
        )}
      </CustomSelect>
    </SelectContainer>
  );
};
