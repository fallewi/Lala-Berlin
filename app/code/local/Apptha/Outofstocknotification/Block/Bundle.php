<?php
/**
 * @name         :  Apptha Out Of Stock Notification
 * @version      :  0.1.5
 * @since        :  Magento 1.4
 * @author       :  Apptha - http://www.apptha.com
 * @copyright    :  Copyright (C) 2011 Powered by Apptha
 * @license      :  http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 * @Creation Date:  June 20 2011
 * @Modified By  :  Bala G
 * @Modified Date:  August 7 2013
 *
 * */
?>
<?php

class Apptha_Outofstocknotification_Block_Bundle extends Mage_Downloadable_Block_Catalog_Product_View_Type 
{
	public function _prepareLayout()
    {  
    	$bundleBlock  = $this->getLayout()->getBlock('product.info.bundle');
    if ($bundleBlock) {
            $bundleBlock->setTemplate('outofstocknotification/bundle.phtml');
        }
		
    }
    
    
}
?>