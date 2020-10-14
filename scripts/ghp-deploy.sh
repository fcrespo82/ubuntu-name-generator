SCRIPTPATH="$( cd "$(dirname "$0")" ; pwd -P )"
CNAME=`cat $SCRIPTPATH/../src/CNAME`
ng build --prod --baseHref "https://$CNAME"

OUT=$? #exit code from last command
if [ $OUT -eq 0 ] ; then
    read -p 'Deploy? [y|N] ' deploy
    case $deploy in
        y|Y) echo "Deploying";
        $SCRIPTPATH/../node_modules/angular-cli-ghpages/angular-cli-ghpages;;
        *) echo "Not deploying";;
    esac
fi