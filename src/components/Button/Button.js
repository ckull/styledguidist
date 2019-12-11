import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ButtonStyled from './styled'

/**
 * Button Description
 */
export default class Button extends Component {
    
    render() {

        return (
            <ButtonStyled
                primary={this.props.primary}
            >
               {this.props.label}
            </ButtonStyled>
        )
    }
}

Button.propTypes = {
    /** No user action on button is allowed */
    disabled: PropTypes.bool,
  
    /** Primary theme color */
    primary: PropTypes.bool,
  
    /** Shadow effect */
    raised: PropTypes.bool,

    /** Label Button */
    label: PropTypes.string
  };
  
  Button.defaultProps = {
    disabled: false,
    primary: false,
    raised: false,
    label: 'Test'
  };