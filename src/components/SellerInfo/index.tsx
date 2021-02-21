import React from "react";
import {
  Container,
  Title,
  LocationCard,
  ReputationCard,
  ReputationThermo,
  ReputationRow,
  SupportIcon,
  ClockIcon,
  More,
  LocationIcon,
} from "./styles";

const SellerInfo: React.FC = () => {
  return (
    <Container>
      <Title>Informações sobre o Vendedor</Title>

      <LocationCard>
        <LocationIcon />
        <div>
          <p>Localização</p>
          <strong>São Paulo, SP</strong>
        </div>
      </LocationCard>

      <ReputationCard>
        <ReputationThermo>
          <li />
          <li />
          <li />
          <li />
          <li className="active" />
        </ReputationThermo>
        <ReputationRow>
          <div>
            <strong>566</strong>
            <span>Vendas nos últimos 4 meses</span>
          </div>

          <div>
            <strong>
              <SupportIcon />
            </strong>
            <span>Presta um bom atendimento</span>
          </div>

          <div>
            <strong>
              <ClockIcon />
            </strong>
            <span>Vendas nos últimos 4 meses</span>
          </div>
        </ReputationRow>
      </ReputationCard>

      <More href="#">Ver mais informações do vendedor</More>
    </Container>
  );
};

export default SellerInfo;
