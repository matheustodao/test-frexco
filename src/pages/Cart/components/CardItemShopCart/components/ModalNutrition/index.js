import PropTypes from 'prop-types';
import { ArrowLeft } from 'phosphor-react';
import { Modal, Overlay, PieChart } from './styles';

export default function ModalNutrition({ isVisible, nutritions, onToggle }) {
  return (
    <Overlay visible={isVisible}>
      <Modal>
        <button type="button" onClick={onToggle()}>
          <ArrowLeft size={24} weight="thin" />
          back
        </button>

        <div className="container__pie__chart">
          <div className="wrapper__pie__chart">
            <PieChart percentage={nutritions.fat} color="#97CD2B">
              {nutritions.fat}g
            </PieChart>
            <small>fat</small>
          </div>

          <div className="wrapper__pie__chart">
            <PieChart percentage={nutritions.carbohydrates} color="#9CBE5A">
              {nutritions.carbohydrates}g
            </PieChart>
            <small>carbohydrates</small>
          </div>

          <div className="wrapper__pie__chart">
            <PieChart percentage={nutritions.calories} color="#A2C856">
              {nutritions.calories}g
            </PieChart>
            <small>calories</small>
          </div>

          <div className="wrapper__pie__chart">
            <PieChart percentage={nutritions.protein} color="#C9EF7B">
              {nutritions.protein}g
            </PieChart>
            <small>protein</small>
          </div>

          <div className="wrapper__pie__chart">
            <PieChart percentage={nutritions.sugar} color="#DCF5A9">
              {nutritions.sugar}g
            </PieChart>
            <small>sugar</small>
          </div>

        </div>
      </Modal>

    </Overlay>
  );
}

ModalNutrition.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  nutritions: PropTypes.shape().isRequired,
  onToggle: PropTypes.func.isRequired,
};
