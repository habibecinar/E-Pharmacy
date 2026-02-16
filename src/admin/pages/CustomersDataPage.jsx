import { useState } from 'react';
import Modal from '../../shared/components/Modal/Modal';
import { Button, Input } from '../../shared/components';
import './CustomersDataPage.css';

const CustomersDataPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  // Mock data
  const customers = [
    {
      id: 1,
      name: 'Alex Shatov',
      email: 'alexshatov@gmail.com',
      phone: '+1 234 567 8900',
      address: '123 Main St, New York, NY 10001',
      spent: 2890.66,
      orders: 15,
      joinDate: '2024-01-15'
    },
    {
      id: 2,
      name: 'Philip Harbach',
      email: 'philip.h@gmail.com',
      phone: '+1 234 567 8901',
      address: '456 Oak Ave, Los Angeles, CA 90001',
      spent: 2767.04,
      orders: 12,
      joinDate: '2024-02-20'
    },
    {
      id: 3,
      name: 'Mirko Fisuk',
      email: 'mirkofisuk@gmail.com',
      phone: '+1 234 567 8902',
      address: '789 Pine Rd, Chicago, IL 60601',
      spent: 2996.00,
      orders: 18,
      joinDate: '2024-01-10'
    },
    {
      id: 4,
      name: 'Olga Semklo',
      email: 'olga.s@cool.design',
      phone: '+1 234 567 8903',
      address: '321 Elm St, Houston, TX 77001',
      spent: 1220.66,
      orders: 8,
      joinDate: '2024-03-05'
    },
    {
      id: 5,
      name: 'Burak Long',
      email: 'longburak@gmail.com',
      phone: '+1 234 567 8904',
      address: '654 Maple Dr, Phoenix, AZ 85001',
      spent: 1890.66,
      orders: 10,
      joinDate: '2024-02-12'
    }
  ];

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="customers-page">
      <div className="page-header">
        <h1 className="page-title">Customers Data</h1>
        <Button variant="primary">+ Add Customer</Button>
      </div>

      <div className="search-section">
        <Input
          placeholder="Search customers by name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="customers-table-container">
        <table className="customers-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Total Spent</th>
              <th>Orders</th>
              <th>Join Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>৳{customer.spent.toFixed(2)}</td>
                <td>{customer.orders}</td>
                <td>{new Date(customer.joinDate).toLocaleDateString()}</td>
                <td>
                  <div className="action-buttons">
                    <button
                      className="btn-action btn-view"
                      onClick={() => setSelectedCustomer(customer)}
                    >
                      View
                    </button>
                    <button className="btn-action btn-edit">Edit</button>
                    <button className="btn-action btn-delete">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Customer Detail Modal */}
      <Modal
        isOpen={!!selectedCustomer}
        onClose={() => setSelectedCustomer(null)}
        title="Customer Details"
        size="medium"
      >
        {selectedCustomer && (
          <div className="customer-detail-modal">
            <div className="detail-grid">
              <div className="detail-field">
                <label>Name</label>
                <p>{selectedCustomer.name}</p>
              </div>
              <div className="detail-field">
                <label>Email</label>
                <p>{selectedCustomer.email}</p>
              </div>
              <div className="detail-field">
                <label>Phone</label>
                <p>{selectedCustomer.phone}</p>
              </div>
              <div className="detail-field">
                <label>Total Spent</label>
                <p>৳{selectedCustomer.spent.toFixed(2)}</p>
              </div>
              <div className="detail-field">
                <label>Total Orders</label>
                <p>{selectedCustomer.orders}</p>
              </div>
              <div className="detail-field">
                <label>Join Date</label>
                <p>{new Date(selectedCustomer.joinDate).toLocaleDateString()}</p>
              </div>
              <div className="detail-field full-width">
                <label>Address</label>
                <p>{selectedCustomer.address}</p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default CustomersDataPage;
