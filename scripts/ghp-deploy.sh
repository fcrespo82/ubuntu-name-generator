SCRIPTPATH="$( cd "$(dirname "$0")" ; pwd -P )"
CNAME=`cat $SCRIPTPATH/../src/CNAME`
ng build -prod -bh "https://$CNAME"

read -p 'Deploy? [y|N] ' deploy
case $deploy in
    y|Y) echo "Deploying";
    cd $SCRIPTPATH/../
    angular-cli-ghpages;;
    *) echo "Not deploying";;
esac