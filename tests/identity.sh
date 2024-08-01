for ((i = 1; i <= $ENDING; i++))
do
IDENTITY=$(dfx identity remove "abc$1")
echo $IDENTITYls
