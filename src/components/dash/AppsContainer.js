import React, { Component } from 'react'
import AppListItem from './AppListItem'
import ImgClient1 from '../../assets/images/client/01.jpg'
import ImgClient2 from '../../assets/images/client/02.jpg'
import ImgClient3 from '../../assets/images/client/03.jpg'
import ImgClient4 from '../../assets/images/client/04.jpg'
import ImgClient5 from '../../assets/images/client/05.jpg'
import ImgClient6 from '../../assets/images/client/06.jpg'
import ImgClient7 from '../../assets/images/client/07.jpg'
import ImgClient8 from '../../assets/images/client/08.jpg'
import ImgClient9 from '../../assets/images/client/09.jpg'
import ImgClient10 from '../../assets/images/client/10.jpg'

class AppsContainer extends Component {
  handleJoinApp = () => {
    alert('handleJoinApp is triggered')
  }
  render() {
    const apps = [
      {
        id: '#d01',
        creatorImgRef: ImgClient1,
        creatorName: 'Howard Tanner',
        price: '$253',
        releaseDate: '31th December 2021',
        appStatus: 'Active',
        actions: 'Review',
      },
      {
        id: '#d02',
        creatorImgRef: ImgClient2,
        creatorName: 'Wendy Filson',
        price: '$482',
        releaseDate: '11th Sept 2021',
        appStatus: 'Active',
        actions: 'Review',
      },
      {
        id: '#d03',
        creatorImgRef: ImgClient3,
        creatorName: 'Faye Bridger',
        price: '$546',
        releaseDate: '2nd Sept 2021',
        appStatus: 'Active',
        actions: 'Review',
      },
      {
        id: '#d04',
        creatorImgRef: ImgClient4,
        creatorName: 'Howard Tanner',
        price: '$253',
        releaseDate: '31th December 2021',
        appStatus: 'Active',
        actions: 'Review',
      },
      {
        id: '#d05',
        creatorImgRef: ImgClient5,
        creatorName: 'Wendy Filson',
        price: '$482',
        releaseDate: '11th Sept 2021',
        appStatus: 'Active',
        actions: 'Review',
      },
      {
        id: '#d06',
        creatorImgRef: ImgClient6,
        creatorName: 'Dwayne Bridge',
        price: '$546',
        releaseDate: '2nd Sept 2021',
        appStatus: 'Active',
        actions: 'Review',
      },
      {
        id: '#d07',
        creatorImgRef: ImgClient7,
        creatorName: 'Wendy Filson',
        price: '$482',
        releaseDate: '11th Sept 2021',
        appStatus: 'Active',
        actions: 'Review',
      },
      {
        id: '#d08',
        creatorImgRef: ImgClient8,
        creatorName: 'Faye Bridger',
        price: '$546',
        releaseDate: '2nd Sept 2021',
        appStatus: 'Active',
        actions: 'Review',
      },
      {
        id: '#d09',
        creatorImgRef: ImgClient9,
        creatorName: 'Howard Tanner',
        price: '$253',
        releaseDate: '31th December 2021',
        appStatus: 'Active',
        actions: 'Review',
      },
      {
        id: '#d10',
        creatorImgRef: ImgClient10,
        creatorName: 'Wendy Filson',
        price: '$482',
        releaseDate: '11th Sept 2021',
        appStatus: 'Active',
        actions: 'Review',
      },
      {
        id: '#d11',
        creatorImgRef: ImgClient6,
        creatorName: 'Dwayne Bridge',
        price: '$546',
        releaseDate: '2nd Sept 2021',
        appStatus: 'Active',
        actions: 'Review',
      },
    ]
    return (
      <div className="col-sm-12 col-md-12 mt-4">
        <div className="d-flex justify-content-between p-4 bg-white shadow rounded-top">
          <h6 className="fw-bold mb-0">Apps List</h6>

          <button
            className="btn btn-sm btn-primary"
            onClick={this.handleJoinApp}
          >
            Join App
          </button>

          <ul className="list-unstyled mb-0">
            <li className="dropdown dropdown-primary list-inline-item">
              <button
                type="button"
                className="btn btn-icon btn-pills btn-soft-primary dropdown-toggle p-0"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="ti ti-dots-vertical"></i>
              </button>
              <div className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow border-0 mt-3 py-3">
                <a className="dropdown-item text-dark" href="#">
                  {' '}
                  Paid
                </a>
                <a className="dropdown-item text-dark" href="#">
                  {' '}
                  Unpaid
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div
          className="table-responsive shadow rounded-bottom"
          data-simplebar
          style={{ height: '550px' }}
        >
          <table className="table table-center bg-white mb-0">
            <thead>
              <tr>
                <th className="border-bottom p-3">No.</th>
                <th className="border-bottom p-3" style={{ minWidth: '220px' }}>
                  App Name
                </th>
                <th className="text-center border-bottom p-3">Price</th>
                <th
                  className="text-center border-bottom p-3"
                  style={{ minWidth: '150px' }}
                >
                  Drop Date(Dt.)
                </th>
                <th className="text-center border-bottom p-3">Status</th>
                <th
                  className="text-end border-bottom p-3"
                  style={{ minWidth: '100px' }}
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {apps.length &&
                apps.map((app) => (
                  <AppListItem
                    key={app.id}
                    id={app.id}
                    creatorImgRef={app.creatorImgRef}
                    creatorName={app.creatorName}
                    price={app.price}
                    releaseDate={app.releaseDate}
                    appStatus={app.appStatus}
                    actions={app.actions}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default AppsContainer
