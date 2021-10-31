import * as React from "react";
import Column from "./Column";

class Select extends React.Component {
  static defaultProps = {
    label: "",
    span: "twelve",
    className: "u-full-width",
    selected: "",
    optional: true,
  };

  render() {
    const props = {...Select.defaultProps, ...this.props};
    return (
      <Column span={props.span}>
        { props.label && <label htmlFor={props.label.toLowerCase()}>{props.label}</label> }
        <select id={props.id || props.label.toLowerCase()}
                name={props.label.toLowerCase()}
                className={props.className}
                value={props.selected}>

          { props.optional ? <option/> : "" }  {/* Empty option */}
          { Object.entries(props.items)?.map(([value, name]) => {
              return <option value={value}>{name}</option>
          }) }
        </select>
      </Column>
    );
  }
}

export default Select;