/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';

/**
 * Internal depdencies
 */
import { H, Stepper } from '@woocommerce/components';
import ProfileWizardHeader from '../header';

export default class Start extends Component {
	render() {
		return (
			<Fragment>
				<ProfileWizardHeader />
				<div className="woocommerce-profile-wizard__container">
					<H className="woocommerce-profile-wizard__header-title">
						{ __( 'Installing plugins', 'woocommerce-admin' ) }
					</H>

					<p>
						{ __(
							'Once Jetpack and WooCommerce Services are installed you will create or log in to a  Jetpack account' +
								' and connect your site to WordPress.com to enable the features on your store.',
							'woocommerce-admin'
						) }
					</p>

					<Stepper
						direction="vertical"
						currentStep="install"
						isPending
						steps={ [
							{
								label: __( 'Install Jetpack and WooCommerce Services', 'woocommerce-admin' ),
								key: 'install',
							},
							{
								label: __( 'Activate Jetpack and WooCommerce Services', 'woocommerce-admin' ),
								key: 'activate',
							},
						] }
					/>
				</div>
			</Fragment>
		);
	}
}
