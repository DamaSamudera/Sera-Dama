import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';

export default function FilterTest() {

  const data = {
    'status': 1,
    'message': 'Sukses',
    'data': {
      'system_message': 'SUCCESS',
      'response': {
        'additionaldata': [],
        'billdetails': [
          {
            'adminfee': '0.0',
            'billid': '8',
            'currency': '360',
            'title': 'TELKOMSEL 50rb - 50.149',
            'totalamount': '50149.00',
            'descriptions': null,
            'body': {
              'DENOM'           : 50000
            }
          },
          {
            'adminfee': '0.0',
            'billid': '9',
            'currency': '360',
            'title': 'TELKOMSEL 75rb - 74.050',
            'totalamount': '74050.00',
            'descriptions': null,
            'body': {
              'DENOM'          : 75000
            }
          },
          {
            'adminfee': '0.0',
            'billid': '10',
            'currency': '360',
            'title': 'TELKOMSEL 100rb - 98.264',
            'totalamount': '98264.00',
            'descriptions': null,
            'body': {
              'DENOM'           : 100000
            }
          },
          {
            'adminfee': '0.0',
            'billid': '11',
            'currency': '360',
            'title': 'TELKOMSEL 150rb - 146.600',
            'totalamount': '146600.00',
            'descriptions': null,
            'body': {
              'DENOM'           : 150000
            }
          },
          {
            'adminfee': '0.0',
            'billid': '12',
            'currency': '360',
            'title': 'TELKOMSEL 200rb - 194.900',
            'totalamount': '194900.00',
            'descriptions': null,
            'body': {
              'DENOM'           : 200000
            }
          }
        ],
        'billername': 'PULSA TSEL',
        'inquiryid': '27190993',
        'paymenttype': 'CLOSE_PAYMENT',
        'responsecode': '0000',
        'responsemsg': 'SUCCESS',
        'subscriberid': '081311529594',
        'subscribername': ''
      },
      'trace': {
        'session_id': '81215AEFADFB710C1258F79ABA1AD710.node3',
        'request_date_time': '20190704185319',
        'words': '779b7f8280415b568cdfd0abcc20eb8c3e18b585',
        'biller_id': '9900002',
        'account_number': '081311529594',
        'systrace': 1564026434,
        'inquiry_id': '27190993'
      }
    }
  };

  const { billdetails, billername, inquiryid, subscriberid  } = data.data.response;
  const filtered = billdetails.filter(item => item.body.DENOM >= 100000);

  return (
    <section className={styles['container']}>
      <h5>Filter Test</h5>
      <header>
        <p>Biller Name : {billername}</p>
        <p>Inquiry ID : {inquiryid}</p>
        <p>Subscriber ID : {subscriberid}</p>
      </header>
      <section className={styles.raw}>
        {billdetails.map((item, idx) =>{
          return (<RawData
            adminfee={item.adminfee}
            billid={item.billid}
            denom={item.body.DENOM}
            idx={idx}
            key={idx}
          />);
        })}
        <h6>After filter</h6>
        {filtered.map((item, idx) =>{
          return (<RawData
            adminfee={item.adminfee}
            billid={item.billid}
            denom={item.body.DENOM}
            idx={idx}
            key={idx}
          />);
        })}
      </section>
    </section>
  );
}

export function RawData ({ idx, adminfee, billid, denom }){
  return (
    <div key={idx}>
      <p>array index : {idx}</p>
      <p>admin fee: {adminfee}</p>
      <p>Bill Id: {billid}</p>
      <p>Denom: {denom}</p>
    </div>
  );
}

RawData.defaultProps = {
  adminfee: '',
  billid: '',
  denom: '',
  idx: 0,
};

RawData.propTypes = {
  adminfee: PropTypes.string,
  billid: PropTypes.string,
  denom: PropTypes.string,
  idx: PropTypes.number,
};
