"use client"

import { encodeImageUrl, encodeImages } from '@/actions/inscribe.actions'
import React, { useCallback, useEffect, useState } from 'react'
import Dropzone, { DropzoneOptions, useDropzone } from 'react-dropzone'

const Inscriber = () => {

    const [files, setFiles] = useState<File[] | null>()
    const [hex, setHex] = useState<string>('')
    const [base64, setBase64] = useState<string>('')

    const onDrop = useCallback((acceptedFiles: File[]) => {
        acceptedFiles.forEach((file: File) => {
            const reader = new FileReader()

            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
                // Do whatever you want with the file contents
                const binaryStr = reader.result
                console.log(binaryStr)
                console.log('read')
            }
            reader.readAsArrayBuffer(file)
        })

    }, [])


    const { getRootProps } = useDropzone({ onDrop })

    const handleUpload = async (acceptedFiles: File[]) => {
        console.log({ acceptedFiles, type: typeof acceptedFiles })

        const formData = new FormData()
        acceptedFiles.map((image: File) => {
            // formData.append('file', image)

            const blobUrl = URL.createObjectURL(image)

            console.log({ blobUrl })
        })
        // formData.append('file', acceptedFiles[0])

        // const response = await fetch('/api/inscribe/encode', { method: 'psot', body: formData })
        // const response = await encodeImages(formData)

        // console.log(response)
        // complete flow:
        // 1.   upload multiple images to server
        // 2.  convert each to base64 encoded
        // 3.  convert to hex
        // 4.  store in db
        // 5,  mint on demand
    }

    const testBlob = async () => {
        const url = "https://static.vecteezy.com/system/resources/previews/035/846/937/non_2x/ai-generated-flowers-hd-hd-backgrounds-hd-wallpapers-free-photo.jpg"
        const scanUrl = await encodeImageUrl(url)
        console.log(await scanUrl)

        setHex(scanUrl.hex)
        setBase64(scanUrl.base64)
    }

    useEffect(() => {
        testBlob()
    }, [])

    return (
        <div {...getRootProps()} className='w-full text-center flex items-center flex-col justify-center gap-y-3 font-mono bg-white/30 p-4 shadow-lg rounded-3xl'>
            <Dropzone onDrop={handleUpload}>
                {({ getRootProps, getInputProps }) => (
                    <section className='w-full'>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p className='h-[200pt] w-full flex items-center justify-center'>
                                Drag or select files to inscribe
                            </p>
                        </div>
                    </section>
                )}
            </Dropzone>


            <div>
                <h3>Hex</h3>
                <input type="text" value={hex} onChange={e => setHex(e.target.value)} />
            </div>

            <div>
                <h3>Base64</h3>
                <input type="text" value={base64} onChange={e => setBase64(e.target.value)} />
            </div>
        </div>
    )
}

export default Inscriber