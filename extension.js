const Main = imports.ui.main;
const GObject = imports.gi.GObject;
const St = imports.gi.St;
const Gio = imports.gi.Gio;
const Mainloop = imports.mainloop;
const Clutter = imports.gi.Clutter;
const PanelMenu = imports.ui.panelMenu;
const PopupMenu = imports.ui.popupMenu;
const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

let _httpSession;

const kanji = GObject.registerClass({ GTypeName: 'kanji'},
    class kanji extends PanelMenu.Button {
        _init () {
            super._init(0.0, "kanji", false);
  
            let icon = new St.Icon({
                gicon : Gio.icon_new_for_string( Me.dir.get_path() + '/kanji.svg' ),
                style_class : 'system-status-icon',
              });

            let settings = getSettings();
            
            //my integer
            //settings.set_int('my-integer', 200);
            log("my integer: " + settings.get_int('my-integer').toString());

            //my double
            //settings.set_double('my-double', 2.1);
            log("my double: " + settings.get_double('my-double').toString());

            //my boolean
            //settings.set_boolean('my-boolean', true);
            log("my boolean: " + settings.get_boolean('my-boolean').toString());

            //my string
            //settings.set_string('my-string', 'new string');
            log("my string: " + settings.get_string('my-string'));

            //my array
            //settings.set_strv('my-array', ['new', 'new2']);
            let arr = settings.get_strv('my-array');
            log("my array: " + arr[1]);

            //my position
            //settings.set_enum('my-position', 2);
            log("my position: " + settings.get_enum('my-position').toString());
            
            this.add_child(icon);
            this._createMenu();
        }
        _convertToKanji() {

            let text = this._kanji_input.get_text();

            if(text == "kanji"){
                this._theKanji.set_text('漢字');
            }
            if(text == "one"){
                this._theKanji.set_text('一');
            }
            if(text == "two"){
                this._theKanji.set_text('二');
            }
            if(text == "three"){
                this._theKanji.set_text('三');
            }
            if(text == "four"){
                this._theKanji.set_text('四');
            }
            if(text == "five"){
                this._theKanji.set_text('五');
            }
            if(text == "six"){
                this._theKanji.set_text('六');
            }
            if(text == "seven"){
                this._theKanji.set_text('七');
            }
            if(text == "eight"){
                this._theKanji.set_text('八');
            }
            if(text == "nine"){
                this._theKanji.set_text('九');
            }
            if(text == "ten"){
                this._theKanji.set_text('十');
            }
            if(text == "hundred"){
                this._theKanji.set_text('百');
            }
            if(text == "thousand"){
                this._theKanji.set_text('千');
            }
            if(text == "ten thousand"){
                this._theKanji.set_text('万');
            }
            if(text == "yen" || text == "circle" || text == "round"){
                this._theKanji.set_text('円');
            }
            if(text == "day" || text == "sun"){
                this._theKanji.set_text('日');
            }
            if(text == "week"){
                this._theKanji.set_text('週');
            }
            if(text == "month" || text == "moon"){
                this._theKanji.set_text('月');
            }
            if(text == "year"){
                this._theKanji.set_text('年');
            }
            if(text == "time" || text == "hour"){
                this._theKanji.set_text('時');
            }
            if(text == "time frame" || text == "span of time"){
                this._theKanji.set_text('間');
            }
            if(text == "minute" || text == "part to understand" || text == "to divide"){
                this._theKanji.set_text('分');
            }
            if(text == "noon"){
                this._theKanji.set_text('午');
            }
            if(text == "before"){
                this._theKanji.set_text('前');
            }
            if(text == "after" || text == "later" || text == "behind"){
                this._theKanji.set_text('後');
            }
            if(text == "now"){
                this._theKanji.set_text('今');
            }
            if(text == "ahead"  || text == "future"){
                this._theKanji.set_text('先');
            }
            if(text == "to come"){
                this._theKanji.set_text('来');
            }
            if(text == "half" || text == "middle"){
                this._theKanji.set_text('半');
            }
            if(text == "every" || text == "each"){
                this._theKanji.set_text('毎');
            }
            if(text == "what" || text == "which" || text == "how many"){
                this._theKanji.set_text('何');
            }
            if(text == "person"){
                this._theKanji.set_text('人');
            }
            if(text == "man" || text == "boy" || text == "male"){
                this._theKanji.set_text('男');
            }
            if(text == "woman" || text == "girl" || text == "female"){
                this._theKanji.set_text('女');
            }
            if(text == "child"){
                this._theKanji.set_text('子');
            }
            if(text == "mother"){
                this._theKanji.set_text('母');
            }
            if(text == "father"){
                this._theKanji.set_text('父');
            }
            if(text == "friend"){
                this._theKanji.set_text('友');
            }
            if(text == "fire"){
                this._theKanji.set_text('火');
            }
            if(text == "water"){
                this._theKanji.set_text('水');
            }
            if(text == "tree" || text == "wood"){
                this._theKanji.set_text('木');
            }
            if(text == "earth" || text == "ground"){
                this._theKanji.set_text('土');
            }
            if(text == "money" || text == "gold"){
                this._theKanji.set_text('金');
            }
            if(text == "book" || text == "source"){
                this._theKanji.set_text('本');
            }
            if(text == "river"){
                this._theKanji.set_text('川');
            }
            if(text == "flower"){
                this._theKanji.set_text('花');
            }
            if(text == "spirit"){
                this._theKanji.set_text('気');
            }
            if(text == "life" || text == "to live" || text == "to be born" || text == "to grow"){
                this._theKanji.set_text('生');
            }
            if(text == "fish"){
                this._theKanji.set_text('魚');
            }
            if(text == "heaven"){
                this._theKanji.set_text('天');
            }
            if(text == "sky" || text == "empty"){
                this._theKanji.set_text('空');
            }
            if(text == "mountain"){
                this._theKanji.set_text('山');
            }
            if(text == "rain"){
                this._theKanji.set_text('雨');
            }
            if(text == "electricity"){
                this._theKanji.set_text('電');
            }
            if(text == "car" || text == "vehicle"){
                this._theKanji.set_text('車');
            }
            if(text == "language" || text == "word" || text == "to chat"){
                this._theKanji.set_text('語');
            }
            if(text == "ear"){
                this._theKanji.set_text('耳');
            }
            if(text == "hand"){
                this._theKanji.set_text('手');
            }
            if(text == "foot" || text == "to add"){
                this._theKanji.set_text('足');
            }
            if(text == "eye"){
                this._theKanji.set_text('目');
            }
            if(text == "mouth"){
                this._theKanji.set_text('口');
            }
            if(text == "name"){
                this._theKanji.set_text('名');
            }
            if(text == "shop"){
                this._theKanji.set_text('店');
            }
            if(text == "station"){
                this._theKanji.set_text('駅');
            }
            if(text == "street" || text == "path" || text == "way"){
                this._theKanji.set_text('道');
            }
            if(text == "shrine" || text == "society"){
                this._theKanji.set_text('社');
            }
            if(text == "country"){
                this._theKanji.set_text('国');
            }
            if(text == "outside"){
                this._theKanji.set_text('外');
            }
            if(text == "learning"){
                this._theKanji.set_text('学');
            }
            if(text == "school"){
                this._theKanji.set_text('校');
            }
            if(text == "up" || text == "above"){
                this._theKanji.set_text('上');
            }
            if(text == "down" || text == "below"){
                this._theKanji.set_text('下');
            }
            if(text == "middle" || text == "center" || text == "inner" || text == "between"){
                this._theKanji.set_text('中');
            }
            if(text == "north"){
                this._theKanji.set_text('北');
            }
            if(text == "west"){
                this._theKanji.set_text('西');
            }
            if(text == "east"){
                this._theKanji.set_text('東');
            }
            if(text == "south"){
                this._theKanji.set_text('南');
            }
            if(text == "right"){
                this._theKanji.set_text('右');
            }
            if(text == "left"){
                this._theKanji.set_text('左');
            }
            if(text == "to see" || text == "to be visible" || text == "to show"){
                this._theKanji.set_text('見');
            }
            if(text == "to hear" || text == "to listen" || text == "to ask"){
                this._theKanji.set_text('聞');
            }
            if(text == "to write"){
                this._theKanji.set_text('書');
            }
            if(text == "to read"){
                this._theKanji.set_text('読');
            }
            if(text == "to talk" || text == "conversation"){
                this._theKanji.set_text('話');
            }
            if(text == "to buy"){
                this._theKanji.set_text('買');
            }
            if(text == "to go" || text == "carry out"){
                this._theKanji.set_text('行');
            }
            if(text == "to go out" || text == "to leave"){
                this._theKanji.set_text('出');
            }
            if(text == "to enter" || text == "to put in"){
                this._theKanji.set_text('入');
            }
            if(text == "to rest" || text == "break" || text == "holiday" || text == "vacation"){
                this._theKanji.set_text('休');
            }
            if(text == "to eat" || text == "food"){
                this._theKanji.set_text('食');
            }
            if(text == "to drink" || text == "a drink"){
                this._theKanji.set_text('飲');
            }
            if(text == "to talk" || text == "word"){
                this._theKanji.set_text('言');
            }
            if(text == "to stand"){
                this._theKanji.set_text('立');
            }
            if(text == "to meet" || text == "society"){
                this._theKanji.set_text('会');
            }
            if(text == "a lot", text == "many"){
                this._theKanji.set_text('多');
            }
            if(text == "a little" || text == "few"){
                this._theKanji.set_text('少');
            }
            if(text == "old"){
                this._theKanji.set_text('古');
            }
            if(text == "new"){
                this._theKanji.set_text('新');
            }
            if(text == "big" || text == "a lot"){
                this._theKanji.set_text('大');
            }
            if(text == "little" || text == "small"){
                this._theKanji.set_text('小');
            }
            if(text == "cheap" || text == "safety" || text == "peace"){
                this._theKanji.set_text('安');
            }
            if(text == "expensive" || text == "high"){
                this._theKanji.set_text('高');
            }
            if(text == "long" || text == "leader"){
                this._theKanji.set_text('長');
            }
            if(text == "white"){
                this._theKanji.set_text('白');
            }
            if(text == "rice"){
                this._theKanji.set_text('米');
            }

            //this._theKanji.set_text("");
        }
        _createMenu() {
            // kanji related widgets in menu
            this.kanji_heading = new PopupMenu.PopupMenuItem('', {reactive: false});
            this.display_kanji_area = new PopupMenu.PopupMenuItem('', {reactive: false});
            this.kanji_input_area = new PopupMenu.PopupMenuItem('', {reactive: false});
            // output
            this._theKanji = new St.Label({
                text: '',
                styleClass: 'kanji-text',
            });
            // input
            this._kanji_input = new St.Entry({
                can_focus: true,
                track_hover: true,
                hint_text: "Enter a word...",
                styleClass: 'kanji-input'
            });
            this._kanji_input.clutter_text.connect('key-release-event', this._convertToKanji.bind(this));

            // add the st widgets to menu items
            // kanji heading
            this.kanji_heading.actor.add_child(new St.Label({
                text: 'Kanji',
                styleClass: 'kanji-heading',
            }));
            this.display_kanji_area.actor.add_child(this._theKanji);
            this.kanji_input_area.actor.add_child(this._kanji_input);

            this.menu.addMenuItem(this.kanji_heading);
            this.menu.addMenuItem(this.display_kanji_area);
            this.menu.addMenuItem(this.kanji_input_area);
        }

        destroy() {
            if (_httpSession !== undefined)
                _httpSession.abort();
                _httpSession = undefined;

            if (this._timeout) {
                Mainloop.source_remove(this._timeout);
                this._timeout = undefined;

                this.menu.removeAll();
            }

            if (this._distraction_timeout) {
                Mainloop.source_remove(this._distraction_timeout);
                this._distraction_timeout = undefined;                
            }
            super.destroy();
        }
    })

let ticker;

function getSettings(){
    let GioSSS = Gio.SettingsSchemaSource;
    let schemaSource = GioSSS.new_from_directory(
        Me.dir.get_child("schemas").get_path(),
        GioSSS.get_default(),
        false
    );
    let schemaObj = schemaSource.lookup('org.gnome.shell.extensions.KanjiOfTheDay', true);
    if(!schemaObj){
        throw new Error('cannot find schemas');
    }
    return new Gio.Settings({ settings_schema : schemaObj });
}

function enable() {
    ticker = new kanji;
    Main.panel.addToStatusArea('kanji', ticker);
}

function disable() {
    ticker.destroy();
    ticker = null;
}
