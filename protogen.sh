protoc \
--js_out=import_style=commonjs,binary:./src/proto \
--grpc-web_out=import_style=typescript,mode=grpcwebtext:./src/proto
--proto_path=./proto \
$(find ./proto/proto -type f -iname "*.proto")

