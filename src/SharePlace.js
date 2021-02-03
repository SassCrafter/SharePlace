/* eslint-disable comma-dangle */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */

import Modal from './UI/Modal';

class PlaceFinder {
  constructor() {
    const addressForm = document.getElementById('place-data');
    const locateUserBtn = document.getElementById('locate-btn');

    locateUserBtn.addEventListener('click', this.locateUserHandler);
    addressForm.addEventListener('sumbit', this.findAddressHandler);
  }

  locateUserHandler(e) {
    if (!navigator.geolocation) {
      alert(
        'Geolocation is not supported in this browser. Please use differen browser or enter address manualy'
      );
      return;
    }
    const modal = new Modal(
      'loading-modal-content',
      'Loading location, please wait'
    );
    modal.show();
    navigator.geolocation.getCurrentPosition(
      (success) => {
        console.log(success);
        modal.hide();
        const coordinates = {
          lat: success.coords.latitude,
          lng: success.coords.longitude,
        };
      },
      (error) => {
        modal.hide();
        alert('Could not locate you, please enter location manually');
      }
    );
  }
}

const placeFinder = new PlaceFinder();
