import React from 'react';
import ButtonModules from './ButtonModules';
import styles from './ModulesDemo.module.css';

function ModulesDemo() {
    return (
        <div className="wrapper">
          <ButtonModules text="Default" />
          <ButtonModules text="Primary" className={styles.primary} />
        </div>
    )
}

export default ModulesDemo;