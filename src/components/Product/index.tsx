import React from "react";

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

import tshirtImage from "../../assets/tshirt.png";

import SellerInfo from "../SellerInfo";
import ProductAction from "../ProductAction";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-Shirt" />
          </Gallery>

          <Info />
        </Column>
        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com Lorem Ipsum</p>
        <p className="description">
          Receba o produto que você está esperando ou devolvemos o seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Integer faucibus, quam ac pretium egestas, sapien tellus varius sem, a
      suscipit leo lacus et sem. Suspendisse bibendum dui facilisis elit
      volutpat laoreet. Integer non consequat velit. Nullam eu lacus vitae est
      ornare vulputate. Quisque viverra turpis a risus laoreet, quis rutrum
      sapien varius. Fusce condimentum leo non mauris vehicula fermentum. Sed
      placerat gravida imperdiet. Sed volutpat tincidunt lacus, feugiat
      tincidunt mi blandit a. Nam facilisis rhoncus dignissim. Vivamus cursus
      nec ex et commodo. Nunc ut elit vel risus finibus semper. Curabitur
      feugiat feugiat odio, ut rutrum mi mattis nec. In lacinia et velit vel
      aliquet. Nulla placerat et augue a pulvinar. Maecenas ac rutrum justo.
      Aliquam semper nibh ut justo ultrices, a mollis sem malesuada. Vestibulum
      viverra ex mi, et tincidunt lorem accumsan ut. Aenean faucibus iaculis
      ante non blandit. Donec quis massa congue, rhoncus mi et, commodo mauris.
      In id nibh non massa congue malesuada eget non eros. Etiam eget dignissim
      dui, et finibus nisi. Morbi leo ante, lacinia at aliquet eu, tristique
      scelerisque est.
      <br />
      <br />
      Itens Inclusos: <br />
      - 1x Led <br />
      - 1x Led <br />
      - 1x Led <br />
      - 1x Led <br />
      - 1x Led <br />
      <br />
      Nam eros nisl, lobortis eget mauris ac, scelerisque suscipit dui. Sed ut
      mi sollicitudin, euismod enim pretium, scelerisque risus. Sed ut tellus
      tempor, dapibus mi eget, semper sapien. Aenean id neque a felis varius
      aliquam. Aenean elementum lorem convallis elementum bibendum. Phasellus
      volutpat tempus ex, ac volutpat erat ultrices consequat. Vivamus nec lorem
      nec ligula posuere semper ac eu eros. Ut magna dui, fringilla a ultricies
      sit amet, ultricies et enim. Nulla vel commodo lorem, ut consequat lacus.
      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
      inceptos himenaeos. Integer nunc mi, vestibulum eu est sit amet, pretium
      rutrum dolor. Vestibulum libero justo, euismod eget ultrices a, vehicula
      at nisl. Fusce rutrum posuere ligula, sit amet condimentum diam malesuada
      ac. Morbi ullamcorper consequat feugiat.
    </p>
  </Description>
);

export default Product;
