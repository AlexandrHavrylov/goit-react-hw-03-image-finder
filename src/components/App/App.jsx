import React, { Component } from "react";
import Button from "../Button/Button";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Modal } from "../Modal/Modal";

import { Serachbar } from "../Searchbar/Serachbar";
import { Container } from "./App.styled";

export class App extends Component {
  state = {
    imgInModal: null,
    image: "",
    page: 1,
    imagesInGallery: [],
    isModalVisible: false,
  };

  // Почему в такой формулировке не работает??
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.page !== prevState.page) {
  //     window.scrollTo({
  //       top: document.documentElement.scrollHeight,
  //       behavior: "smooth",
  //     });
  //   }
  // }

  // Так работает но с багом, как правильно вставить этот код?)
  componentDidUpdate() {
    if (this.state.page > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  getImage = (image) => {
    this.setState({
      image,
      page: 1,
      imagesInGallery: [],
    });
  };

  onLoadMore = (page) => {
    this.setState({
      page,
    });
  };

  onImageChange = (images) => {
    this.setState({
      imagesInGallery: [...images],
    });
  };

  handleModalOpen = (imgInModal) => {
    this.setState({
      imgInModal,
      isModalVisible: true,
    });
  };

  modalClose = (value) => {
    this.setState({
      isModalVisible: value,
    });
  };
  render() {
    const { imagesInGallery, imgInModal, isModalVisible } = this.state;

    const isVisible = imagesInGallery.length > 0;
    return (
      <Container>
        <Serachbar onSubmit={this.getImage} />

        <ImageGallery
          onImgClick={this.onImgClick}
          onImageChange={this.onImageChange}
          image={this.state.image}
          page={this.state.page}
          openModal={this.handleModalOpen}
        />
        {isVisible && (
          <Button onClick={this.onLoadMore} page={this.state.page} />
        )}

        {isModalVisible && <Modal onClose={this.modalClose} img={imgInModal} />}
      </Container>
    );
  }
}
