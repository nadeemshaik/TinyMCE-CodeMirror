/**
 * plugin.js
 *
 * Copyright, Nadeem
 * Released under LGPL License.
 *
 *Sorry, but no idea what else to write
 */

/*global tinymce:true */

tinymce.PluginManager.add('youtube', function(editor, url) {
	var embeddedUrl = 'img/youtube.gif';

	function getHtml() {
		var youtubeHtml;

		youtubeHtml = '<table role="presentation" class="mce-grid">';

		tinymce.each(video, function(row) {
			youtubeHtml += '<tr>';

			tinymce.each(row, function(icon) {
				var embeddedUrl = url + 'img/youtube.gif';

				youtubeHtml += '<td><a href="#" data-mce-url="' + embeddedUrl + '" tabindex="-1"><img src="' +
					embeddedUrl + '" style="width: 18px; height: 18px"></a></td>';
			});

			youtubeHtml += '</tr>';
		});

		youtubeHtml += '</table>';

		return youtubeHtml;
	}

	editor.addButton('youtube', {
		type: 'panelbutton',
		popoverAlign: 'bc-tl',
		panel: {
			autohide: true,
			html: getHtml,
			onclick: function(e) {
				var linkElm = editor.dom.getParent(e.target, 'a');

				if (linkElm) {
					editor.insertContent('<iframe width="640" height="360" src="http://www.youtube.com/embed/BhEMR5OJxbg?feature=player_detailpage" frameborder="0" allowfullscreen></iframe>');
					this.hide();
				}
			}
		},
		tooltip: 'youtube'
	});

});
