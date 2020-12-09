import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import allAmenities from '../../../constants/amenities';
import allRules from '../../../constants/rules';
import './styles.scss';

const AmenityRule = ({ formData, setFormData }) => {
  return (
    <div className="amenity-rule">
      <h4>
        Step 4: Amenities & Rules <span>(optional)</span>
      </h4>
      <FormGroup>
        <Label className="review-label">Add your hotel amenities:</Label>
        <div className="all-amenities">
          {allAmenities.map(item => (
            <FormGroup check inline key={item.id}>
              <Label check className="check-label">
                <Input
                  type="checkbox"
                  onChange={event => {
                    if (event.target.checked) {
                      setFormData({
                        ...formData,
                        amenities: [...formData.amenities, { id: item.id }],
                      });
                    } else {
                      setFormData({
                        ...formData,
                        amenities: formData.amenities.filter(
                          amenity => amenity.id !== item.id
                        ),
                      });
                    }
                  }}
                />{' '}
                {item.name}
              </Label>
            </FormGroup>
          ))}
        </div>
      </FormGroup>
      <FormGroup className="mt-5">
        <Label className="review-label">Add your hotel rules:</Label>
        <div className="all-rules">
          {allRules.map(item => (
            <FormGroup check inline key={item.id}>
              <Label check className="check-label">
                <Input
                  type="checkbox"
                  onChange={event => {
                    if (event.target.checked) {
                      setFormData({
                        ...formData,
                        rules: [...formData.rules, { id: item.id }],
                      });
                    } else {
                      setFormData({
                        ...formData,
                        rules: formData.rules.filter(
                          rule => rule.id !== item.id
                        ),
                      });
                    }
                  }}
                />{' '}
                {item.name}
              </Label>
            </FormGroup>
          ))}
        </div>
      </FormGroup>
    </div>
  );
};

export default AmenityRule;
