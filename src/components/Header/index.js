import React, { Component, memo } from 'react';

import { FaCarSide, FaMotorcycle } from 'react-icons/fa';
import { SelectType, SelectVehicle, Vehicles, TitleVehicles, SellCar } from './styles';

class Header extends Component {
  state = {
    active: 0,
    chooseVehicle: [
      { label: 'carros', active: true },
      { label: 'motos', active: false },
    ],
  };

  handlechooseVehicle = active => {
    this.setState({ active });
  };

  render() {
    const { active, chooseVehicle } = this.state;

    return (
      <SelectVehicle>
        <SelectType active={active}>
          {chooseVehicle.map((filter, index) => (
            <Vehicles
              key={String(index)}
              onClick={() => this.handlechooseVehicle(index)}
            >
              {filter.active ? (
                <FaCarSide size={25} />
              ) : (
                <FaMotorcycle size={25} />
              )}
              <TitleVehicles>
                <small>comprar</small>
                {filter.label}
              </TitleVehicles>
            </Vehicles>
          ))}
        </SelectType>
        <SellCar>
          <a href="https://webmotors.com.br/vender" target="__blank">
        Vender meu carro
        </a>
        </SellCar>
      </SelectVehicle>
    );
  }
}
export default memo(Header);
