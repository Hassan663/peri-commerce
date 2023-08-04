
export const changeSlide = (swiperRef, navigation) => {
    if (swiperRef.current) {
        const currentSlideIndex = swiperRef.current.state.index;
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex < 3) { swiperRef.current.scrollBy(1); }
        else {
            navigation.navigate('Login')

        }
    }
};