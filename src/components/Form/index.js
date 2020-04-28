import React, { Component } from "react";

import { location, distance, year, price } from "../parts/Select/data";
import api from "../../services/api";

import { MdChevronRight } from "react-icons/md";
import Checkbox from "../parts/Checkbox";
import Select from "../parts/Select";
import {
  Form,
  Container,
  ContainerSelect,
  SelectGroup,
  Icon,
  ContainerCheckbox,
  AdvancedSearch,
  Offers,
  Clear,
} from "./styles";

export default class Body extends Component {
  state = {
    newCheckbox: false,
    usedCheckbox: false,
    clear: false,
    error: false,
    
    make: [],
    model: [],
    version: [],

    makeID: { id: 0, label: "Todas" },
    modelID: { id: 0, label: "Todos" },
    versionID: { id: 0, label: "Todas" },
  };

  async componentDidMount() {
    try {
      this.handleMake();
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  componentDidUpdate(_, prevState) {
    const { makeID, modelID, clear } = this.state;

    if (clear) {
      this.clearOption({ name: "all" });
    }
    if (prevState.makeID !== makeID) {
      this.clearOption(makeID);
    }

    if (prevState.modelID !== modelID && !!modelID) {
      this.clearOption(modelID);
    }
  }

  clearOption = async (obj) => {
    if (!obj) return;
    const { name } = obj;
    if (name === "makeID") {
      await this.setState({
        model: [],
        modelID: null,
        version: [],
        versionID: null,
      });
      this.handleModel();
    } else if (name === "modelID") {
      await this.setState({
        version: [],
        versionID: null,
      });
      this.handleVersion();
    } else if (name === "all") {
      await this.setState({
        make: [],
        makeID: null,
        model: [],
        modelID: null,
        version: [],
        versionID: null,
        clear: false,
      });
      this.handleMake();
    }
  };

  removeAllFilters = async () => {
    await this.setState({
      make: [],
      makeID: { id: 0, label: "Todas" },
      model: [],
      modelID: { id: 0, label: "Todos" },
      version: [],
      versionID: { id: 0, label: "Todas" },
      clear: true,
    });
    this.handleMake();
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  handleSelect = (e) => {
    this.setState({ [e.name]: e });
  };

  handleMake = async () => {
    const response = await api.get("/Make");
    const { data } = response;
    const all = { id: 0, label: "Todas", name: "makeID" };
    const newMake = data.map((m) => ({
      id: m.ID,
      value: m.Name,
      label: m.Name,
      name: "makeID",
    }));

    this.setState({ make: [all, ...newMake] });
  };

  handleModel = async () => {
    const { makeID } = this.state;

    const response = await api.get(`/Model?MakeID=${makeID.id}`);
    const { data } = response;
    const all = { id: 0, label: "Todos", name: "modelID" };
    const newModel = data.map((m) => ({
      id: m.ID,
      value: m.Name,
      label: m.Name,
      name: "modelID",
    }));

    this.setState({ model: [all, ...newModel] });
  };

  handleVersion = async () => {
    const { modelID } = this.state;

    const response = await api.get(`/Version?ModelID=${modelID.id}`);
    const { data } = response;
    const all = { id: 0, label: "Todos", name: "versionID" };
    const newVersion = data.map((m) => ({
      id: m.ID,
      label: m.Name,
      name: "versionID",
    }));

    this.setState({ version: [all, ...newVersion] });
  };

  render() {
    const {
      error,
      make,
      makeID,
      model,
      modelID,
      version,
      versionID,
      newCheckbox,
      usedCheckbox,
    } = this.state;

    return (
      <Container>
        <Form onSubmit={this.handleSubmit} error={error}>
          <ContainerCheckbox>
            <label htmlFor="new">
              <Checkbox
                id="new"
                name="newCheckbox"
                checked={newCheckbox}
                onChange={this.handleInputChange}
              />
              Novos
            </label>
            <label htmlFor="used">
              <Checkbox
                id="used"
                name="usedCheckbox"
                checked={usedCheckbox}
                onChange={this.handleInputChange}
              />
              Usados
            </label>
          </ContainerCheckbox>
          <ContainerSelect>
            <div>
              <SelectGroup>
                <Select isClearable options={location} label="Onde" />
                <Select options={distance} label="Raio" />
                <Icon />
              </SelectGroup>
              <SelectGroup>
                <Select
                  value={makeID}
                  options={make}
                  label="Marca"
                  onChange={this.handleSelect}
                />
              </SelectGroup>
              <SelectGroup>
                <Select
                  value={modelID}
                  options={model}
                  label="Modelo"
                  onChange={this.handleSelect}
                />
              </SelectGroup>
            </div>
            <div>
              <Select options={year} placeholder="Ano Desejado" />
              <Select options={price} placeholder="Faixa de Preço" />
              <Select
                value={versionID}
                options={version}
                label="Versão"
                onChange={this.handleSelect}
              />
            </div>
          </ContainerSelect>
          <AdvancedSearch>
            <div>
              <MdChevronRight size={20} />
              <a href="https://webmotors.com.br" target="__blank">
                {" "}
                Busca avançada{" "}
              </a>
            </div>
            <div>
              <Clear onClick={this.removeAllFilters}>
                Limpar filtros
              </Clear>
              <Offers>Ver ofertas</Offers>
            </div>
          </AdvancedSearch>
        </Form>
      </Container>
    );
  }
}
