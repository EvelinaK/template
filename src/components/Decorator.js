import React, { Component } from 'react';
import css from './decoration.module.scss';
export default function Decoration() {
//   state = {  }
//   render() {
//     let addStyle = '';
//     if(this.props.isLoginPage){
//       addStyle = "-login"
//     }else if(this.props.isCalculationPage) {
//       addStyle = "-calculation"
//     }
    return ( 
      <section className={css.decorationlogin} >
          <div className={css.decspot}></div>
          <div className={css.decstrawberry}></div>
          <div className={css.decleaves}></div>
          <div className={css.decbanana}></div>
      </section>
    );
  
}
