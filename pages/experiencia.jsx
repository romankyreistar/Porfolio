import React from "react";
import styled from "styled-components";
import TimelineExperienciaFormacao from "@/components/TimelineExperienciaFormacao";

//Styled-components
import { TitleSection } from "@/styles/ui";

export default function Experiencia() {
	return (
		<>
			<TitleSection>Formação e cursos</TitleSection>
			<div style={{ marginTop: "60px" }}></div>
			<TimelineExperienciaFormacao />
		</>
	);
}
