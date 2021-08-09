import {h} from "preact";
import {useEffect, useState} from "preact/hooks";
import {ModalContainer, Modal, ModalFooter, Button, Link} from "./styles";

interface Props {
  version: string;
}

export default function UpdateModal({version}: Props) {
  const [isOpened, setOpened] = useState(true);

  useEffect(() => {
    setOpened((isOpened) => {
      if (isOpened === false) {
        $(".container").css("filter", "blur(0px)");
        document.body.style.overflow = 'initial';
      }
      return isOpened;
    })
  }, [isOpened]);

  return (
    <ModalContainer opened={isOpened}>
      <Modal>
        <div>
          <div className="h1">Update Required</div>
          <p>The extension needs to be updated in order to work properly.</p>
          <p>Click <b>INSTALL</b> to see installation guides or <b>Deactivate</b> to deactivate the extension.
          </p>
        </div>
        <ModalFooter>
          <div>v{version}</div>
          <div>
            <Link onClick={() => setOpened(false)}>Deactivate Extension</Link>
            <Button href="https://github.com/itsumarfarooq/quizsliver#how-to-install">Install</Button>
          </div>
        </ModalFooter>
      </Modal>
    </ModalContainer>
  )
}
