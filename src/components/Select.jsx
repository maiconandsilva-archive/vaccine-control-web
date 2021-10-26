import * as React from "react";
import Column from "./Column";

class Select extends React.Component {
  defaultProps = {
    label: "",
    span: "twelve",
    className: "u-full-width",
    empty: true,
  };

  render() {
    const props = {...this.defaultProps, ...this.props};
    return (
        <Column span={props.span}>
          { props.label && <label htmlFor={props.label.toLowerCase()}>{props.label}</label> }
          <select id={props.id || props.label.toLowerCase()} name={props.label.toLowerCase()}
                  className={props.className}>

            { props.empty ? <option selected/> : "" }  {/* Empty option */}
            { Object.entries(props.items)?.map(([value, name]) => {
                return <option value={value} selected={value === props.selected}>{name}</option>
            }) }
          </select>
        </Column>
    );
  }
}

export default Select;