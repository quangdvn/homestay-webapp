import React, { useState } from 'react';
import './styles.scss';
import './react_dates_overrides.scss';
import OwlCarousel from 'react-owl-carousel';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';

const Home = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState('startDate');
  const onDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };
  return (
    <div className="container">
      <header>
        <div className="left">
          <div className="logo">
            <img src={require('../../assets/images/user-logo.png')} alt="" />
          </div>
          <div className="search">
            <input type="text" placeholder="Search" />
            <img src="" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="menu-nav">
            <a href="#">Hotel</a>
            <a href="#">Listing</a>
            <a href="#">Agent</a>
            <a href="#">Pricing</a>
          </div>
          <div className="sign-in-up-btn">
            <div className="sign-in">Sign in</div>
            <div className="sign-up">Sign up</div>
          </div>
        </div>
      </header>
      <main>
        <article>
          <section className="intro-section">
            <div className="slide-intro">
              <OwlCarousel
                className="owl-theme"
                loop={true}
                items={1}
                autoplay={true}
                autoplayTimeout={4000}
                animateOut={'fadeOut'}
                dots={true}
              >
                <div class="single-slider slider-bg-1"></div>
                <div class="single-slider slider-bg-2"></div>
                <div class="single-slider slider-bg-3"></div>
              </OwlCarousel>
            </div>
            <div className="search-hotel">
              <h3>Latest reviews. Lowest prices.</h3>
              <div className="description">
                compares prices from 200+ booking sites to help you find the
                lowest price on the right hotel for you.
              </div>
              <div className="form-search">
                <select>
                  <option className="label-select">Select city</option>
                  <option value="Hà Nội">Hà Nội </option>
                  <option value="Đà Nẵng">Đà Nẵng</option>
                  <option value="HCM">HCM</option>
                </select>
                <select>
                  <option className="label-select">Select district</option>
                  <option value="Hoàn Kiếm">Hoàn Kiếm</option>
                  <option value="Thanh Xuân"> Thanh Xuân</option>
                  <option value="Long Biên">Long Biên</option>
                </select>
                <div className="form-select-date">
                  <DateRangePicker
                    endDate={endDate}
                    endDateId="endDate"
                    focusedInput={focusedInput.focusedInput}
                    isOutsideRange={() => null}
                    onDatesChange={onDatesChange}
                    onFocusChange={focusedInput =>
                      setFocusedInput({ focusedInput })
                    }
                    startDate={startDate}
                    startDateId="startDate"
                  />
                </div>
                <div className="guest">
                  <span>Guest:</span>
                  <div> 9</div>
                </div>
                <div className="find-hotel-btn">Find hotels</div>
              </div>
            </div>
          </section>
          <section className="explore-destination">
            <div className="header">
              <h3 className="title">Explore Destinations</h3>
              <a href="#">Show all</a>
            </div>
            <div className="list-city">
              <div className="city">
                <img
                  src="https://khachsandanang.info/wp-content/uploads/2016/11/1-2.jpg"
                  alt=""
                />
                <div className="info">
                  <h3 className="name">Đà Nẵng</h3>
                  <span className="number-hotel">522525 Hotels</span>
                </div>
              </div>
              <div className="city">
                <img
                  src="https://khachsandanang.info/wp-content/uploads/2016/11/1-2.jpg"
                  alt=""
                />
                <div className="info">
                  <h3 className="name">Đà Nẵng</h3>
                  <span className="number-hotel">522525 Hotels</span>
                </div>
              </div>
              <div className="city">
                <img
                  src="https://khachsandanang.info/wp-content/uploads/2016/11/1-2.jpg"
                  alt=""
                />
                <div className="info">
                  <h3 className="name">Đà Nẵng</h3>
                  <span className="number-hotel">522525 Hotels</span>
                </div>
              </div>
            </div>
          </section>
          <section className="top-hotel">
            <div className="header">
              <h3 className="title">Travelers’ Choice: Top hotels</h3>
              <a href="#">Show all</a>
            </div>
            <div className="list-hotel">
              <div className="hotel">
                <img
                  src="https://i.pinimg.com/originals/6e/bd/54/6ebd5405194190cc7dd885ca164cde20.jpg"
                  alt=""
                />
                <div className="info">
                  <div className="address">8424 Padberg Flats</div>
                  <div className="name">Small Metal Ball</div>
                  <div className="price-status">
                    <div className="price">$316.00</div>
                    <div className="status-cancel">
                      /Night - Free Cancellation
                    </div>
                  </div>

                  <div className="star">
                    {/* <img src="" alt="" /> */}
                    <strong className="status">Bad(12)</strong>
                  </div>
                </div>
              </div>
              <div className="hotel">
                <img
                  src="https://i.pinimg.com/originals/6e/bd/54/6ebd5405194190cc7dd885ca164cde20.jpg"
                  alt=""
                />
                <div className="info">
                  <div className="address">8424 Padberg Flats</div>
                  <div className="name">Small Metal Ball</div>
                  <div className="price-status">
                    <div className="price">$316.00</div>
                    <div className="status-cancel">
                      /Night - Free Cancellation
                    </div>
                  </div>

                  <div className="star">
                    {/* <img src="" alt="" /> */}
                    <strong className="status">Bad(12)</strong>
                  </div>
                </div>
              </div>
              <div className="hotel">
                <img
                  src="https://i.pinimg.com/originals/6e/bd/54/6ebd5405194190cc7dd885ca164cde20.jpg"
                  alt=""
                />
                <div className="info">
                  <div className="address">8424 Padberg Flats</div>
                  <div className="name">Small Metal Ball</div>
                  <div className="price-status">
                    <div className="price">$316.00</div>
                    <div className="status-cancel">
                      /Night - Free Cancellation
                    </div>
                  </div>

                  <div className="star">
                    {/* <img src="" alt="" /> */}
                    <strong className="status">Bad(12)</strong>
                  </div>
                </div>
              </div>
              <div className="hotel">
                <img
                  src="https://i.pinimg.com/originals/6e/bd/54/6ebd5405194190cc7dd885ca164cde20.jpg"
                  alt=""
                />
                <div className="info">
                  <div className="address">8424 Padberg Flats</div>
                  <div className="name">Small Metal Ball</div>
                  <div className="price-status">
                    <div className="price">$316.00</div>
                    <div className="status-cancel">
                      /Night - Free Cancellation
                    </div>
                  </div>

                  <div className="star">
                    {/* <img src="" alt="" /> */}
                    <strong className="status">Bad(12)</strong>
                  </div>
                </div>
              </div>
              <div className="hotel">
                <img
                  src="https://i.pinimg.com/originals/6e/bd/54/6ebd5405194190cc7dd885ca164cde20.jpg"
                  alt=""
                />
                <div className="info">
                  <div className="address">8424 Padberg Flats</div>
                  <div className="name">Small Metal Ball</div>
                  <div className="price-status">
                    <div className="price">$316.00</div>
                    <div className="status-cancel">
                      /Night - Free Cancellation
                    </div>
                  </div>

                  <div className="star">
                    {/* <img src="" alt="" /> */}
                    <strong className="status">Bad(12)</strong>
                  </div>
                </div>
              </div>
              <div className="hotel">
                <img
                  src="https://i.pinimg.com/originals/6e/bd/54/6ebd5405194190cc7dd885ca164cde20.jpg"
                  alt=""
                />
                <div className="info">
                  <div className="address">8424 Padberg Flats</div>
                  <div className="name">Small Metal Ball</div>
                  <div className="price-status">
                    <div className="price">$316.00</div>
                    <div className="status-cancel">
                      /Night - Free Cancellation
                    </div>
                  </div>

                  <div className="star">
                    {/* <img src="" alt="" /> */}
                    <strong className="status">Bad(12)</strong>
                  </div>
                </div>
              </div>
              <div className="hotel">
                <img
                  src="https://i.pinimg.com/originals/6e/bd/54/6ebd5405194190cc7dd885ca164cde20.jpg"
                  alt=""
                />
                <div className="info">
                  <div className="address">8424 Padberg Flats</div>
                  <div className="name">Small Metal Ball</div>
                  <div className="price-status">
                    <div className="price">$316.00</div>
                    <div className="status-cancel">
                      /Night - Free Cancellation
                    </div>
                  </div>

                  <div className="star">
                    {/* <img src="" alt="" /> */}
                    <strong className="status">Bad(12)</strong>
                  </div>
                </div>
              </div>
              <div className="hotel">
                <img
                  src="https://i.pinimg.com/originals/6e/bd/54/6ebd5405194190cc7dd885ca164cde20.jpg"
                  alt=""
                />
                <div className="info">
                  <div className="address">8424 Padberg Flats</div>
                  <div className="name">Small Metal Ball</div>
                  <div className="price-status">
                    <div className="price">$316.00</div>
                    <div className="status-cancel">
                      /Night - Free Cancellation
                    </div>
                  </div>

                  <div className="star">
                    {/* <img src="" alt="" /> */}
                    <strong className="status">Bad(12)</strong>
                  </div>
                </div>
              </div>
              <div className="hotel">
                <img
                  src="https://i.pinimg.com/originals/6e/bd/54/6ebd5405194190cc7dd885ca164cde20.jpg"
                  alt=""
                />
                <div className="info">
                  <div className="address">8424 Padberg Flats</div>
                  <div className="name">Small Metal Ball</div>
                  <div className="price-status">
                    <div className="price">$316.00</div>
                    <div className="status-cancel">
                      /Night - Free Cancellation
                    </div>
                  </div>

                  <div className="star">
                    {/* <img src="" alt="" /> */}
                    <strong className="status">Bad(12)</strong>
                  </div>
                </div>
              </div>
              <div className="hotel">
                <img
                  src="https://i.pinimg.com/originals/6e/bd/54/6ebd5405194190cc7dd885ca164cde20.jpg"
                  alt=""
                />
                <div className="info">
                  <div className="address">8424 Padberg Flats</div>
                  <div className="name">Small Metal Ball</div>
                  <div className="price-status">
                    <div className="price">$316.00</div>
                    <div className="status-cancel">
                      /Night - Free Cancellation
                    </div>
                  </div>

                  <div className="star">
                    {/* <img src="" alt="" /> */}
                    <strong className="status">Bad(12)</strong>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="luxary-hotel">
            <div className="header">
              <h3 className="title">Best Rated: Luxary hotels</h3>
              <a href="#">Show all</a>
            </div>
            <div className="list-hotel">
              <div className="hotel">
                <img
                  src="https://i.pinimg.com/originals/6e/bd/54/6ebd5405194190cc7dd885ca164cde20.jpg"
                  alt=""
                />
                <div className="info">
                  <div className="address">8424 Padberg Flats</div>
                  <div className="name">Small Metal Ball</div>
                  <div className="price-status">
                    <div className="price">$316.00</div>
                    <div className="status-cancel">
                      /Night - Free Cancellation
                    </div>
                  </div>

                  <div className="star">
                    {/* <img src="" alt="" /> */}
                    <strong className="status">Bad(12)</strong>
                  </div>
                </div>
              </div>
              <div className="hotel">
                <img
                  src="https://i.pinimg.com/originals/6e/bd/54/6ebd5405194190cc7dd885ca164cde20.jpg"
                  alt=""
                />
                <div className="info">
                  <div className="address">8424 Padberg Flats</div>
                  <div className="name">Small Metal Ball</div>
                  <div className="price-status">
                    <div className="price">$316.00</div>
                    <div className="status-cancel">
                      /Night - Free Cancellation
                    </div>
                  </div>

                  <div className="star">
                    {/* <img src="" alt="" /> */}
                    <strong className="status">Bad(12)</strong>
                  </div>
                </div>
              </div>
              <div className="hotel">
                <img
                  src="https://i.pinimg.com/originals/6e/bd/54/6ebd5405194190cc7dd885ca164cde20.jpg"
                  alt=""
                />
                <div className="info">
                  <div className="address">8424 Padberg Flats</div>
                  <div className="name">Small Metal Ball</div>
                  <div className="price-status">
                    <div className="price">$316.00</div>
                    <div className="status-cancel">
                      /Night - Free Cancellation
                    </div>
                  </div>

                  <div className="star">
                    {/* <img src="" alt="" /> */}
                    <strong className="status">Bad(12)</strong>
                  </div>
                </div>
              </div>
              <div className="hotel">
                <img
                  src="https://i.pinimg.com/originals/6e/bd/54/6ebd5405194190cc7dd885ca164cde20.jpg"
                  alt=""
                />
                <div className="info">
                  <div className="address">8424 Padberg Flats</div>
                  <div className="name">Small Metal Ball</div>
                  <div className="price-status">
                    <div className="price">$316.00</div>
                    <div className="status-cancel">
                      /Night - Free Cancellation
                    </div>
                  </div>

                  <div className="star">
                    {/* <img src="" alt="" /> */}
                    <strong className="status">Bad(12)</strong>
                  </div>
                </div>
              </div>
              <div className="hotel">
                <img
                  src="https://i.pinimg.com/originals/6e/bd/54/6ebd5405194190cc7dd885ca164cde20.jpg"
                  alt=""
                />
                <div className="info">
                  <div className="address">8424 Padberg Flats</div>
                  <div className="name">Small Metal Ball</div>
                  <div className="price-status">
                    <div className="price">$316.00</div>
                    <div className="status-cancel">
                      /Night - Free Cancellation
                    </div>
                  </div>

                  <div className="star">
                    {/* <img src="" alt="" /> */}
                    <strong className="status">Bad(12)</strong>
                  </div>
                </div>
              </div>
              <div className="hotel">
                <img
                  src="https://i.pinimg.com/originals/6e/bd/54/6ebd5405194190cc7dd885ca164cde20.jpg"
                  alt=""
                />
                <div className="info">
                  <div className="address">8424 Padberg Flats</div>
                  <div className="name">Small Metal Ball</div>
                  <div className="price-status">
                    <div className="price">$316.00</div>
                    <div className="status-cancel">
                      /Night - Free Cancellation
                    </div>
                  </div>

                  <div className="star">
                    {/* <img src="" alt="" /> */}
                    <strong className="status">Bad(12)</strong>
                  </div>
                </div>
              </div>
              <div className="hotel">
                <img
                  src="https://i.pinimg.com/originals/6e/bd/54/6ebd5405194190cc7dd885ca164cde20.jpg"
                  alt=""
                />
                <div className="info">
                  <div className="address">8424 Padberg Flats</div>
                  <div className="name">Small Metal Ball</div>
                  <div className="price-status">
                    <div className="price">$316.00</div>
                    <div className="status-cancel">
                      /Night - Free Cancellation
                    </div>
                  </div>

                  <div className="star">
                    {/* <img src="" alt="" /> */}
                    <strong className="status">Bad(12)</strong>
                  </div>
                </div>
              </div>
              <div className="hotel">
                <img
                  src="https://i.pinimg.com/originals/6e/bd/54/6ebd5405194190cc7dd885ca164cde20.jpg"
                  alt=""
                />
                <div className="info">
                  <div className="address">8424 Padberg Flats</div>
                  <div className="name">Small Metal Ball</div>
                  <div className="price-status">
                    <div className="price">$316.00</div>
                    <div className="status-cancel">
                      /Night - Free Cancellation
                    </div>
                  </div>

                  <div className="star">
                    {/* <img src="" alt="" /> */}
                    <strong className="status">Bad(12)</strong>
                  </div>
                </div>
              </div>
              <div className="hotel">
                <img
                  src="https://i.pinimg.com/originals/6e/bd/54/6ebd5405194190cc7dd885ca164cde20.jpg"
                  alt=""
                />
                <div className="info">
                  <div className="address">8424 Padberg Flats</div>
                  <div className="name">Small Metal Ball</div>
                  <div className="price-status">
                    <div className="price">$316.00</div>
                    <div className="status-cancel">
                      /Night - Free Cancellation
                    </div>
                  </div>

                  <div className="star">
                    {/* <img src="" alt="" /> */}
                    <strong className="status">Bad(12)</strong>
                  </div>
                </div>
              </div>
              <div className="hotel">
                <img
                  src="https://i.pinimg.com/originals/6e/bd/54/6ebd5405194190cc7dd885ca164cde20.jpg"
                  alt=""
                />
                <div className="info">
                  <div className="address">8424 Padberg Flats</div>
                  <div className="name">Small Metal Ball</div>
                  <div className="price-status">
                    <div className="price">$316.00</div>
                    <div className="status-cancel">
                      /Night - Free Cancellation
                    </div>
                  </div>

                  <div className="star">
                    {/* <img src="" alt="" /> */}
                    <strong className="status">Bad(12)</strong>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
      <footer>
        <div className="logo">
          <img src={require('../../assets/images/user-logo.png')} alt="" />
        </div>
        <div className="menu-nav">
          <a href="#">Hotel</a>
          <a href="#">Listing</a>
          <a href="#">Agent</a>
          <a href="#">Pricing</a>
        </div>
        <div className="copy-right">Copyright @ 2020 RedQ, Inc.</div>
      </footer>
    </div>
  );
};

export default Home;
