import React from 'react'
import { Spin } from 'antd'
import styles from './index.module.scss'

function Loader() {
	return (
		<div className={styles.spin}>
			<Spin tip="Loading..." size="large" />
		</div>
	)
}

export default Loader
