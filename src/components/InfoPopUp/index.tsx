import React from "react";
import {
  IoMusicalNoteOutline,
  IoVolumeHighOutline,
  IoThumbsUpOutline,
} from "react-icons/io5";
import { Button } from "..";

import * as Styled from "./index.styled";

interface Props {
  onClose: () => void;
}

export function InfoPopUp({ onClose }: Props) {
  return (
    <Styled.Container>
      <Styled.PopUp>
        <h1>HOW TO PLAY</h1>
        <Styled.Spacer />
        <Styled.Section>
          <IoMusicalNoteOutline size={50} />
          <p>
            Listen to the intro, then find the correct artist &amp; title in the
            list.
          </p>
        </Styled.Section>
        <Styled.Section>
          <IoVolumeHighOutline size={50} />
          <p>Skipped or incorrect attempts unlock more of the intro </p>
        </Styled.Section>
        <Styled.Section>
          <IoThumbsUpOutline size={50} />
          <p>Answer in as few tries as possible and share your score!</p>
        </Styled.Section>
        <Button variant="green" style={{ marginTop: 20 }} onClick={onClose}>
          Play Now
        </Button>
      </Styled.PopUp>
    </Styled.Container>
  );
}
