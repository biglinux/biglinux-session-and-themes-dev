// New Biglinux theme

var panel = new Panel;
panel.location = "bottom";
panel.alignment = "left";
panel.height = Math.round(gridUnit * 2.2);

var menu = panel.addWidget("org.biglinux.appsmenu");
menu.writeConfig("icon","big-favicon-new");

var tasks = panel.addWidget("org.kde.plasma.icontasks");
tasks.currentConfigGroup = ["Configuration", "General"];
tasks.writeConfig("showOnlyCurrentScreen", true);
tasks.writeConfig("launchers", ["preferred://browser", "preferred://filemanager", "applications:org.gnome.Calculator.desktop", "applications:libreoffice-writer.desktop", "applications:org.kde.kate.desktop", "applications:bigtts.desktop"]);

var presentwindows = panel.addWidget("com.github.zren.presentwindows");
presentwindows.currentConfigGroup = ["Configuration", "General"];
presentwindows.writeConfig("icon", "mission-control");
presentwindows.writeConfig("clickCommand", "Overview");

panel.addWidget("org.kde.plasma.systemtray");

var clock = panel.addWidget("org.kde.plasma.eventcalendar");
clock.currentConfigGroup = ["Configuration", "General"];
clock.writeConfig("widgetShowMeteogram", false);
clock.writeConfig("clockShowLine2", true);
clock.writeConfig("twoColumns", false);
clock.writeConfig("monthHeightSingleColumn", "350");

panel.addWidget("org.kde.plasma.win7showdesktop");

var desktopsArray = desktopsForActivity(currentActivity());
for( var j = 0; j < desktopsArray.length; j++) {
    desktopsArray[j].wallpaperPlugin = 'org.kde.image';
}
