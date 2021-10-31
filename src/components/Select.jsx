import * as React from "react";
import Column from "./Column";

class Select extends React.Component {
  static defaultProps = {
    label: "",
    span: "twelve",
    className: "u-full-width",
    selected: "",
    optional: false,
  };

  render() {
    const {
      span, label, id, optional, className, selected, items, ...props
    } = {...Select.defaultProps, ...this.props};

    return (
      <Column span={span}>
        { label && <label htmlFor={label.toLowerCase()}>{label}</label> }
        <select id={id || label.toLowerCase()} name={label.toLowerCase()}
                className={className} value={selected} {...props}>
          { optional && !selected ? <option value="" key="-1"/> : "" }  {/* Empty option */}
          { items && Object.entries(items)?.map(
                ([value, name]) => <option value={value} key={value}>{name}</option>) }
        </select>
      </Column>
    );
  }
}

export default Select;