import React from 'react'
import CatalogLink from './SidebarLinks/Catalog'
import CustomersLink from './SidebarLinks/Customers'
import ReportsLink from './SidebarLinks/Reports'
import SalesLink from './SidebarLinks/Sales'

export default function SidebarLinks() {
  return (
      <nav className='flex-1 overflow-y-hidden hover:overflow-y-auto'>
          <div className="px-2 py-3 space-y-2">
              {/* Catalog */}
              <CatalogLink />
              {/* Sales */}
              <SalesLink />
              {/* Customers */}
              <CustomersLink />
              {/* Reports */}
              <ReportsLink />
          </div>
      </nav>
  )
}
