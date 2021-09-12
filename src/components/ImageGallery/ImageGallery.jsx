import React, { Component } from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { fetchImage } from "../../servises/image-api";
import Loader from "react-loader-spinner";
import { ImagesGallery } from "./ImageGallery.styled";

export class ImageGallery extends Component {
  state = {
    chosenImg: null,
    images: [],
    loading: false,
    erorr: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { image, page } = this.props;
    const pageChange = image.trim() && prevProps.page !== page;
    const imageChange = image.trim() && prevProps.image !== image;

    if (imageChange) {
      this.setState({
        loading: true,
      });
      fetchImage(image)
        .then((images) => {
          this.setState({
            images: [...images],
            loading: false,
          });
        })
        .catch((error) =>
          this.setState({
            error,
          })
        );
    }
    if (pageChange) {
      this.setState({
        loading: true,
      });
      fetchImage(image, page)
        .then((images) => {
          this.setState((prevState) => ({
            images: [...prevState.images, ...images],
            loading: false,
          }));
        })
        .catch((error) =>
          this.setState({
            error,
          })
        );
    }

    if (prevState.images !== this.state.images) {
      this.props.onImageChange(this.state.images);
    }
  }

  render() {
    const { images, loading } = this.state;

    return (
      <>
        <ImagesGallery>
          {images.map((image, index) => (
            <ImageGalleryItem
              id={index}
              key={index}
              image={image}
              openModal={this.props.openModal}
            />
          ))}
          {loading && (
            <Loader type="Circles" color="#00BFFF" height={80} width={80} />
          )}
        </ImagesGallery>
      </>
    );
  }
}
