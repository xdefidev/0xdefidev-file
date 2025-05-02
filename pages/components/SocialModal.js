import Image from "next/image";
import Link from "next/link";

import { useEffect } from "react"

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

export default function SocialModal(props) {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

    // console.log(props, "props")

    // useEffect(()=>{
    //   onOpen()
    // }, [])

    return(
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="bg-[#edede9]">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 !font-josefin">
                <h2 className="font-sans font-bold text-2xl">Contact</h2>
              </ModalHeader>
              <ModalBody className="w-full grid grid-cols-4">
                <Link href="https://t.me/xdefideveloper" target="_blank" className="flex justify-center">
                  <Image
                    src="/telegram-svgrepo-com (2).svg"
                    width={40}
                    height={40}
                    alt=""
                  />
                </Link>
                <Link href="https://wa.me/+17062289620" target="_blank" className="flex justify-center">
                  <Image
                    src="/whatsapp-whats-app-svgrepo-com.svg"
                    width={40}
                    height={40}
                    alt=""
                  />
                </Link>
                <Link href="https://discord.com/users/839903148462178315/" target="_blank" className="flex justify-center">
                  {" "}
                  <Image
                    src="/discord-icon-svgrepo-com.svg"
                    width={40}
                    height={40}
                    alt=""
                  />
                </Link>
                <Link href="mailto:xdefidev@gmail.com" target="_blank" className="flex justify-center">
                  <Image
                    src="/email-mail-web-svgrepo-com.svg"
                    width={40}
                    height={40}
                    alt=""
                  />
                </Link>

              
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose} className="font-sans" >
                  Close
                </Button>
                {/* <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    )
}