"use client"
import { useState } from "react";
import { FileButton, Button, Group, Text, List } from "@mantine/core";
import { FileIcon } from "@/public/icons/file-icon";

const UploadBtn = () => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <>
      <Group>
        <FileButton onChange={setFiles} accept="image/png,image/jpeg" multiple>
          {(props) => <Button className="flex items-center italic font-normal text-base bg-white-1 text-light-black-10 hover:bg-white-1" {...props}> <span className="pr-2"><FileIcon /></span> Upload</Button>}
        </FileButton>
      </Group>

      {files.length > 0 && (
        <Text size="sm" mt="sm">
          Picked files:
        </Text>
      )}

      <List size="sm" mt={5} withPadding>
        {files.map((file, index) => (
          <List.Item key={index}>{file.name}</List.Item>
        ))}
      </List>
    </>
  );
};

export default UploadBtn;
