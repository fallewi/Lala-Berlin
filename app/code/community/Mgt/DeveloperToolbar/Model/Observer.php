<?php
/**
 * MGT-Commerce GmbH
 * http://www.mgt-commerce.com
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/osl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to info@mgt-commerce.com so we can send you a copy immediately.
 *
 * @category    Mgt
 * @package     Mgt_DeveloperToolbar
 * @author      Stefan Wieczorek <stefan.wieczorek@mgt-commerce.com>
 * @copyright   Copyright (c) 2012 (http://www.mgt-commerce.com)
 * @license     http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */

class Mgt_DeveloperToolbar_Model_Observer
{
    public function removeCoreProfilerBlock($observer)
    {
        Mage::app()->getLayout()->removeOutputBlock('core_profiler');
    }
	public function addHandleUpdateLayout(Varien_Event_Observer $observer)
	{
		if(!Varien_Profiler::isEnabled())
			return $this;
		$update = $observer->getEvent()->getLayout()->getUpdate();
        $handles = $update->getHandles();
		$update->resetHandles();
        foreach ($handles as $handle) {
			$update->addHandle($handle);
            if($handle =='default')
				$update->addHandle('mgt_toolbar');
        }
		return $this;
	}
}