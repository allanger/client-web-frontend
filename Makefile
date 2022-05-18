.PHONY: protobuf

protobuf:  
				protoc  --js_out=import_style=commonjs,binary:./src/proto \
                --grpc-web_out=import_style=typescript,mode=grpcwebtext:./src/proto \
                --proto_path=./proto \
                $$(find ./proto -type f -iname "*.proto")


