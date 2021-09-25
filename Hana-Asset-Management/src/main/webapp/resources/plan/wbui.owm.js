if(typeof wbUI !== 'undefined' && typeof wbUI.mobile === 'undefined') {
    wbUI.extend('owm', (function() {
        var obj = {
            eventName : '.owmUI',

            init: function() {
                console.log('init');
                return this.each(function(){
                    var $html = $(this);
                    // tgl ����Ʈ ��� Ŭ���� �̺�Ʈ ����
                    obj._toggleClass.call($html.find('.owm-tgl-list, .owm-anaList'), {
                        toggleAnimCont : '.box-con'
                    });
                    // input ���� ��� Ŭ���� ����
                    obj._toggleClass.call($html, {
                        toggleTarget : '.form-wrap',
                        toggleBtn : 'input'
                    });
                    // ���ڼ��� - �󼼰˻�
                    obj._toggleClass.call($html, {
                        toggleTarget : '.srch-box',
                        toggleBtn : '.owm-search .btn-detail',
                        toggleClass : 'open',
                        toggleText : {
                            open : '�󼼴ݱ�',
                            close : '�󼼿���'
                        },

                        toggleAnimCont : '.srch-detail'
                    });
                    // ���뷱�� üũ �ڽ�
                    obj._toggleClass.call($html, {
                        toggleTarget: '.js-owm-toggleTarget',
                        toggleBtn: '.item-select',
                        toggleClass : 'checked',
                        isSiblingsHide : true
                    });
                    // placeholder
                    obj._setPlaceholder.call($html);
                    // Hover �̺�Ʈ
                    obj._onHover.call($html.find('.js-hover-btn'));
                    // �˾� ��ġ ����
                    obj.layerPopupReposition.call($html.find('.owm-md-lypop'));
                    // �˾� ��ư �̺�Ʈ ����
                    obj._layerPopupBtn.call($html.find('.js-owm-openPop'));
                    // ���� �����̴�
                    obj._setOwmSlider.call($html.find('.slide-wrap'));
                    // ���� ž ���
                    obj._setOwmMainBanner.call($html);
                    // ���� �����̴�
                    obj._setOwmSlider.call($html.find('.con1-banner'), {
                        paging : '.indicator',
                        conWrap : '.banner',
                        list : '> ul',
                        next : '.next',
                        prev : '.prev',
                        autoPlay: false,
                        isLoop: false,
                        duration : 'fast'
                    });
                    // ���� best 10 �ݵ� �����̵�
                    obj._setProductTab.call($html.find('.product-list'));
                    obj.setProductSlide.call($html.find('.product-list > ul > li'));

                    // üũ�ڽ� �̺�Ʈ ����
                    obj._allCheck.call($html.find('.totalCheck'));
                    // ���ɺ� �繫����
                    obj.ageIntro.call($html.find('.owm-fin-tab1>li>a'));
                    // �󼼰˻� range slider
                    obj.rangeSliderDetailSrch.call($html.find('.js-range-slider'));
                    // �󼼰˻� range slider
                    obj.rangeSlider.call($html.find('.js-rangeSlider'));
                    // �����ڻ�(�ݵ�)��Ȳ �ݵ庸�� padding�� ����
                    obj._setDetailChangePadding.call($html.find('.js-fundDetail'));
                    // ��õ�ݵ� best 10 fmk-list �޴�
                    obj._setFmkList.call($html.find('.fmk-list')); // 2017.04.27 ��ɻ���
                    // ���޴�
                    obj._quickMenuScroll.call($html.find('.owm-quick'));

                    // Ÿ��Ʋ ���� ��� 
                    obj._randomBg.call($html.find('.owm-con > .owm-tit-area > h2'));
                    // h2�� �̹����� ������ ��� imgŬ���� ����
                    $('.owm-tit-area > h2').each(function() {
                        if($(this).find('> img').length > 0) {
                            $(this).addClass('img');
                        }
                    });

                    // // �ڻ���� ���� �׽�Ʈ�� ��ũ��Ʈ (���� �츮���� ����)
                    // $('.fundmk-table1 .owm-btn-m').on('mouseover focusin', function() {
                    //     if($.trim( $(this).text() ) == '������') {
                    //         $(this).next('.owm-tooltip').hide();
                    //     } else {
                    //         $(this).parent().parent().find('.owm-tooltip').hide();
                    //         $($(this).next(".owm-tooltip")[0]).show();
                    //     }
                    // });

                    // $('.fundmk-table1 .owm-btn-m').parent().on('mouseleave focusout', function() {
                    //     $(this).parent().find('.owm-tooltip').hide();
                    // });

                    // Ű���� ���ټ��� ���� �ڻ������ ���� �̺�Ʈ �߰�
                    $('.fundmk-table1 .owm-btn-m').on('focusin.owm keydown.owm mouseover.owm', function(e) {
                        var $tooltip = $(this).next('.owm-tooltip');

                        if(!$tooltip.length) { return; }

                        if(e.type === 'mouseover') {
                            $(this).parent().parent().find('.owm-tooltip').removeClass('open').hide()
                        }
                        $tooltip.addClass('open');
                    });

                    $('.fundmk-table1 .owm-btn-m').on('focusout.owm keydown.owm', function(e) {
                        var $tooltip = $(this).next('.owm-tooltip'),
                            $focusElem = $tooltip.find('a');

                        if (e.shiftKey && e.keyCode === 9 || !$focusElem.length) {
                            $tooltip.removeClass('open').hide();
                        }
                    });
                    // ��ư�� ������ �θ� ������Ʈ���� mouseleave�� ���� �ݱ�
                    $('.fundmk-table1 .owm-btn-m').parent().on('mouseleave.owm', function(e) {
                        $(this).parent().find('.owm-tooltip').removeClass('open').hide();
                    });


                    $('.owm-tooltip').on('focusout.owm keydown.owm', 'a', function(e) {
                        var $parent = $(this).closest('.owm-tooltip'),
                            $target = $(e.target);

                        // ������ ������ ��ư���� ���� ������ ��� ���� �ݱ�
                        if (e.keyCode === 9 && !e.shiftKey && $target[0] === $parent.find('a').last()[0]) {
                            $parent.removeClass('open').hide();
                        }
                    });
                    // End Ű���� ���ټ��� ���� �ڻ������ ���� �̺�Ʈ �߰�
                });
            },

            onLoad : function() {
                console.log('_owmObj onLoad');
                obj._onBindEvents();
                obj._onResize();
            },

            // �ܵ� �̺�Ʈ�� ��� ���⿡ �ۼ�
            _onBindEvents : function() {
                var $dom = $(document);

                $dom.on('click.fundmkList', '.pd-box > a', function(e) {
                    e.preventDefault();
                    var $slideWrap = $(this).closest('.slide-wrap');
                    $(this).closest('li').remove();
                    if($slideWrap.data('owmSlider')) {
                        $slideWrap.data('owmSlider').refresh();
                    }
                });

            },

            _onResize : function() {
                var timer = null;
                $(window).on('resize'+obj.eventName, function() {
                    clearTimeout(timer);
                    timer = setTimeout(function() {
                        obj.centerPosition($('.ly-wrap'));
                    }, 0)
                });
            },

            _setPlaceholder : function() {
                return this.each(function() {
                    var $srchOption = $(this).find('.srch-option > input');

                    $srchOption.on({
                        focusin : function() {
                            var getValue = $(this).val(),
                                getTitle = $(this).attr('title');

                            if(getValue === getTitle) {
                                $(this).val('');
                            }
                        },

                        focusout : function() {
                            var getValue = $(this).val(),
                                getTitle = $(this).attr('title');

                            if(getValue === '') {
                                $(this).val(getTitle);
                            }
                        }
                    });
                });
            },

            /**
             * �ش� ��Ұ� �����ϴ��� üũ
             * @returns {boolean}
             */
            isExists : function(target) {
                return target.length !== 0;
            },

            /**
             * �±׸� get
             * @param {jQuery | HTMLElement} target
             * @returns {string}
             */
            getTagName : function(target) {
                return obj.isExists($(target)) ? $(target)[0].tagName.toUpperCase() : '';
            },

            /**
             * �޸� ����
             * @param  {[type]} x [description]
             * @return {[type]}   [description]
             */
            commas : function(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            },

            /**
             * Ÿ�� ����� ���̰� ������ ���̺��� ���� ��� ��� ����
             * @param {jQuery | HTMLElement} target ���Ľ�ų ���
             */
            centerPosition : function(target) {
                var $target = $(target),
                    targetHeight = $target.innerHeight(),
                    bh = $(window).height(),
                    resultTop = (bh - targetHeight) / 2;

                if($target.is(':hidden')) { return; }
                if($target.length > 1) {
                    $target.each(function() {
                        obj.centerPosition($target);
                    });
                    return this;
                }
                if(targetHeight < bh) {
                    $target.css('top', resultTop+'px');
                } else {
                    $target.css('top', '0px');
                }
            },

            /**
             * ���̾� �˾� ����
             * @param {jQuery | HTMLElement} target
             * @param {object} options �ɼ� ��ü
             * @param {string} options.type �˾� Ÿ�� ex) fade...
             * @param {string} options.duration �ӵ�
             * @param {string} options.callback �ݹ� �Լ�
             */
            openPopup : function(options) {
                return this.each(function() {
                    var $target = $(this),
                        config = options || {},
                        type = config.type || '',
                        duration = config.duration || 'fast';

                    if(type === '') {
                        $target.show();

                        if(typeof config.callback === 'function') {
                            config.callback();
                        }
                    } else if(type === 'fade') {
                        $target.fadeIn({
                            easing : '',
                            duration : duration,
                            complete : function() {
                                if(typeof config.callback === 'function') {
                                    config.callback();
                                }
                            }
                        });
                    }

                    // ���� ����
                    obj.centerPosition($target.find('.ly-wrap'));

                    // �ݱ��ư �̺�Ʈ ����
                    $target.find('.js-owm-closePop').one('click', function(e) {
                        e.preventDefault();
                        e.stopPropagation();

                        obj.closePopup.call($target);
                    });
                });
            },

            /**
             * ���̾� �˾� Ŭ����
             * @param {jQuery | HTMLElement} target
             * @param {object} options �ɼ� ��ü
             * @param {string} options.type �˾� Ÿ�� ex) fade...
             * @param {string} options.duration �ӵ�
             * @param {string} options.callback �ݹ� �Լ�
             */
            closePopup : function(options) {
                return this.each(function() {
                    var $target = $(this),
                        config = options || {},
                        type = config.type || '',
                        duration = config.duration || 'fast';

                    if(type === '') {
                        $target.hide();

                        if(typeof config.callback === 'function') {
                            config.callback();
                        }
                    } else if(type === 'fade') {
                        $target.fadeOut({
                            easing : '',
                            duration : duration,
                            complete : function() {
                                if(typeof config.callback === 'function') {
                                    config.callback();
                                }
                            }
                        });
                    }
                });
            },

            /**
             * Ŭ���� ���
             * @param {object} settings �ɼ� ��ü
             * @param {string} settings.toggleTarget class�� ������ ���
             * @param {string} settings.toggleBtn ��ư ���
             * @param {string} settings.toggleClass ������ Ŭ��������
             * @returns {*}
             * @private
             */
            _toggleClass : function(settings, callback) {
                var defaults = {
                    toggleTarget : '.js-owm-toggleTarget',
                    toggleBtn : '.js-owm-toggleBtn',
                    toggleClass : 'on',
                    toggleText : {
                        open : '',
                        close : ''
                    },

                    toggleAnimCont : '',
                    isSiblingsHide : false
                };

                return this.each(function() {
                    var config = $.extend({}, defaults, settings),
                        $target = $(this),
                        isSiblingsHide = $target.attr('data-isSiblingsHide') ? $target.data('isSiblingsHide') : config.isSiblingsHide  && true;

                    // INPUT Ÿ���̰� checked�� �Ǿ����� ��� Ŭ���� �߰�
                    if(obj.getTagName($target.find(config.toggleBtn)) === 'INPUT') {
                        $target.find(config.toggleBtn).each(function() {
                            if($(this).is(':checked')) {
                                $(this).closest(config.toggleTarget).addClass(config.toggleClass);
                            }
                        });
                    }

                    $target.on('click'+obj.eventName, config.toggleBtn, function(e) {
                        var $toggleTarget = $(this).closest(config.toggleTarget),
                            $siblingsTarget = $toggleTarget.siblings(),
                            isSelfRemove = $(this).attr('type') !== 'radio',
                            openTxt = config.toggleText.open,
                            closeTxt = config.toggleText.close,
                            animCont = config.toggleAnimCont;

                        if(!$toggleTarget.hasClass(config.toggleClass)) {
                            $toggleTarget.addClass(config.toggleClass);
                            if(openTxt !== '') {
                                $(this).text(openTxt);
                            }

                            // �ִϸ��̼� �߰�
                            if(animCont !== '') {
                                $toggleTarget.find(animCont).hide().stop(true, false).slideDown('fast');
                            }

                        } else if(isSelfRemove) {
                            // �ִϸ��̼� �߰�
                            if(animCont !== '' && $(animCont).length > 0) {
                                $toggleTarget.find(animCont).show().stop(true, false).slideUp('fast', function() {
                                    $toggleTarget.removeClass(config.toggleClass);
                                });
                            } else {
                                $toggleTarget.removeClass(config.toggleClass);
                            }

                            if(closeTxt !== '') {
                                $(this).text(closeTxt);
                            }

                        }

                        // ���� ��� Ŭ���� ����
                        if(isSiblingsHide || $target.hasClass('owm-anaList') || !isSelfRemove) {
                            $siblingsTarget.removeClass(config.toggleClass);
                            if(closeTxt !== '') {
                                $siblingsTarget.text(closeTxt);
                            }
                        }



                        // INPUT �� ��
                        if(obj.getTagName($(this)) === 'INPUT'){

                            if($(this).attr('type') !== 'radio' && $(this).attr('type') !== 'checkbox') {
                                $(this).one('focusout', function() {
                                    $toggleTarget.removeClass(config.toggleClass);
                                });

                                // ���� ��ư�� �� ���� üũ�Ͽ� ���� ���� ����� ���� form-wrap on ����
                            } else if($(this).attr('type') === 'radio') {
                                var $radioTarget = $(this),
                                    getRadioName = $(this).attr('name');
                                $('[name="'+ getRadioName +'"]').filter(function() {
                                    if(!$(this).is(':checked')) {
                                        return this;
                                    }
                                }).closest(config.toggleTarget).removeClass(config.toggleClass);
                            }
                        } else if (obj.getTagName($(this)) === 'A') {
                            e.preventDefault();
                        }

                        if(typeof callback === 'function') {
                            callback(config);
                        }
                    });
                });
            },

            _onHover : function(settings) {
                return this.each(function() {
                    var $target = $(this),
                        $owmLayer = $target.siblings('.owm-layer');

                    if($owmLayer.length > 0) {
                        $target.on({
                            mouseenter : function() {
                                $owmLayer.addClass('open');
                            },

                            mouseleave : function() {
                                $owmLayer.removeClass('open');
                            }
                        });
                    }

                });
            },

            /**
             * ��ü���� ���
             * @param {object} settings �ɼ� ��ü
             * @param {string} settings.all ��ü���� üũ�ڽ��� ���Ե� ����� Ŭ����
             * @param {string} settings.list ����Ʈ üũ�ڽ��� ���Ե� ����� Ŭ����
             * @returns {*}
             * @private
             */
            _allCheck : function(settings) {
                var defaults = {
                    all : '.tcTop',
                    list : '.tcCont'
                };

                return this.each(function() {
                    var config = $.extend({}, defaults, settings),
                        $target = $(this);

                    // �̺�Ʈ ����
                    $target.on('click'+obj.eventName, 'input[type="checkbox"]', function(e) {
                        var allCheck = obj.isExists($(this).closest(config.all)),
                            listCheck = obj.isExists($(this).closest(config.list)),
                            $all = $target.find(config.all+' input[type="checkbox"]'),
                            $list = $target.find(config.list+' input[type="checkbox"]'),
                            listLength = $list.length,
                            checkLength = $list.filter(':checked').length;

                        if(allCheck) {
                            if($(this).is(':checked')) {
                                $list.parent().addClass('on');
                                $list.prop('checked', true);
                            } else {
                                $list.parent().removeClass('on');
                                $list.prop('checked', false);
                            }
                        } else if (listCheck) {
                            if(listLength === checkLength) {
                                $all.parent().addClass('on');
                                $all.prop('checked', true);
                            } else {
                                $all.parent().removeClass('on');
                                $all.prop('checked', false);
                            }
                        }
                    });
                });
            },

            /**
             * �˾� reposition
             * @returns {*}
             * @private
             */
            layerPopupReposition : function() {
                return this.each(function() {
                    var $target = $(this);

                    if($target.is(':visible')){
                        obj.openPopup.call($target);
                    }
                });
            },

            /**
             * ���̾��˾� ��ư �̺�Ʈ ����
             * @param {object} settings
             * @param {string} settings.openBtn ���¹�ư Ŭ����
             * @param {string} settings.closeBtn �˾� �ݱ� ��ư Ŭ����
             * @returns {*}
             * @private
             */
            _layerPopupBtn : function(settings) {
                var defaults = {
                    openBtn : '.js-owm-openPop',
                    closeBtn : '.js-owm-closePop'
                };

                return this.each(function() {
                    var config = $.extend({}, defaults, settings),
                        $target = $(this),
                        $layerPopup = $($target.attr('href')),
                        $closeBtn = $layerPopup.find(config.closeBtn);

                    if($layerPopup.is(':visible')) {
                        obj.centerPosition($layerPopup.find('.ly-wrap'));
                    }

                    // �ݱ��ư �̺�Ʈ ����
                    $target.on('click'+obj.eventName, function(e) {
                        e.preventDefault();
                        e.stopPropagation();

                        obj.openPopup.call($layerPopup);
                    });
                });
            },

            //���ɺ� �繫����(finance4.html)
            ageIntro : function(){
                var $ageTab = $('.owm-fin-tab1');
                var $overA = $('.owm-fin-tab1>li>a');
                return this.each(function() {
                    $overA.on('mouseover focusin', function (e){
                        var target = $(e.currentTarget);
                        var idx = target.parent().index()+1;
                        $ageTab.addClass('on over'+idx);
                        target.parent().addClass('on');
                    });
                    $overA.on('mouseleave focusout', function (e){
                        var target = $(e.currentTarget);
                        var li = target.parent();
                        var idx = target.parent().index()+1;
                        $ageTab.removeClass('on over'+idx);
                        target.parent().removeClass('on');
                    });
                });
            },

            /**
             * ���� rangeSlider
             * @param  {[type]} settings [description]
             * @return {[type]}          [description]
             *
             *
             * @method setFirst(index) first �����̴� �̵�
             * @method setLast(index) last �����̴� �̵�
             * @method getIndex('first or last') ���� �����̴��� index ���� ������
             * @example
             * $('target').data('range').method();
             */
            rangeSlider : function(settings) {
                var defaults = {
                    firstTarget : '.pointer.first',
                    lastTarget : '.pointer.last'
                };

                return this.each(function() {
                    // �̹� ��ũ��Ʈ�� ����� ���
                    if($(this).data('range')) { return; }

                    var config = $.extend({}, defaults, settings),
                        method = {},

                        $target = $(this),
                        $graph = $target.find('.graph'),
                        $first = $target.find(config.firstTarget),
                        $last = $target.find(config.lastTarget),

                        dataLen = $target.attr('data-len'),
                        dataStartIndex = $target.attr('data-startIndex') ? parseInt($target.attr('data-startIndex'), 10) : 0,
                        useComma = dataLen >= 1000,    //  ( data-length�� ���� 1000�� ������ �޸� ��� )

                        average = 100 / dataLen,

                        position = {
                            first : 0,
                            last : 0
                        },


                        // Form Chain
                        $firstChain = $first.attr('data-chain') ? $('.'+$first.attr('data-chain')) : null,
                        $lastChain = $last.attr('data-chain') ? $('.'+$last.attr('data-chain')) : null;


                    // �ؽ�Ʈ ����
                    function _setInputText(target, index) {
                        return target.each(function() {
                            var getTag = obj.getTagName($(this)),
                                getInput = useComma ? obj.commas(index) : index;

                            if(getTag === 'INPUT') {
                                $(this).val(getInput);
                            } else {
                                $(this).text(getInput);
                            }
                        });
                    }

                    // input keydown, focusout �̺�Ʈ
                    function _onInput(target) {

                        // input�� �̺�Ʈ �߰�
                        target.filter(function() {
                            var getTag = obj.getTagName($(this));

                            if(getTag === 'INPUT') {
                                return $(this);
                            }

                        }).on('keydown focusout', function(e) {
                            var $target = $(this),
                                handle = $(this).hasClass($first.attr('data-chain')) ? 'first' : 'last';

                            // �޸� ���� ( data-length�� ���� 1000�� ������ �޸� ���� )
                            if(e.type === 'keydown' && useComma) {
                                setTimeout(function() {
                                    var getValue = $target.val(),
                                        convert = getValue.split(',').join('');

                                    $target.val(obj.commas(convert));
                                }, 0);
                            }

                            //���� �Ǵ� ��Ŀ�� �ƿ��� ���� �� �����̴��� ����
                            if((e.type === 'keydown' && e.keyCode === 13) || e.type === "focusout" ){
                                setTimeout(function() {
                                    var getValue = $target.val().split(',').join('') - dataStartIndex;

                                    // value ���� ��� ���� ��� 0���� �ʱ�ȭ
                                    if(getValue === '') {
                                        // moveSlider(null, handle, 0);

                                        // ������ value ������ �����̴� ����
                                    } else {
                                        moveSlider(null, handle, getValue*1);
                                    }
                                }, 0);
                            }
                        });
                    }

                    /**
                     * [range slider �̺�Ʈ]
                     * @param  {[MOUSEEVENT]}  event
                     * @param  {[String]}  handle         ['first' or 'last']
                     * @param  {[number]}  moveIndex      [�̵���ų index ��]
                     * @param  {Boolean} isSelectChange [true�� ��� select change �̺�Ʈ trigger]
                     * @return {[type]}                 [description]
                     */
                    function moveSlider(event, handle, moveIndex) {
                        var offset = 0,
                            getWidth = 0,
                            getLeft = 0,
                            getPer = 0,
                            firstPos = 0,
                            lastPos = 0,
                            firstMove = 0,
                            lastMove = 0;
                        result = 0;

                        if(event) {
                            event.preventDefault();
                            event.stopPropagation();
                            paddingL = parseInt($target.css('padding-left'), 10);
                            offset = $target.offset().left + paddingL;
                            getWidth = $target.width();
                            getLeft = event.pageX - offset;
                            getPer = getLeft / getWidth * 100;
                        }

                        firstPos = position.first,
                            lastPos = position.last + position.first,
                            firstMove = 0,
                            lastMove = 0;
                        result = typeof moveIndex === 'number' ? moveIndex * average : Math.round(getPer / average) * average;

                        if(result < 0) {
                            result = 0;
                        } else if (result > 100) {
                            result = 100;
                        }

                        // last
                        if (handle === 'last') {
                            lastMove = result <= firstPos ? 0 : Math.abs(result - firstPos);
                            // lastMove = (getPer / average) * average;

                            // last move
                            $graph.css('width', lastMove+'%');

                            position.last = lastMove;

                            // get index
                            //console.log(getIndex('last'));


                            // ���� �Ǿ� �ִ� input�� value �� ����
                            if($lastChain) {
                                _setInputText($lastChain, getIndex('last'));
                            }

                            // first
                        } else if (handle === 'first') {
                            firstMove = result >= lastPos ? lastPos : result;
                            lastMove = Math.abs(firstMove - lastPos);

                            // first move
                            $graph.css('left', firstMove + '%');
                            $graph.css('width', lastMove + '%');

                            position.first = firstMove;
                            position.last = lastMove;

                            // ���� �Ǿ� �ִ� input�� value �� ����
                            if($firstChain) {
                                _setInputText($firstChain, getIndex());
                            }
                        }

                    }

                    /**
                     * �ε����� ���� (default "first")
                     * @param  {[type]} handle ["first" �Ǵ� "last" (�Է����� ���� ��� "first")]
                     * @return {[type]}        [�ε����� ��ȯ]
                     */
                    function getIndex(handle) {
                        var firstPos = position.first,
                            lastPos = position.last + position.first,
                            getIndex = -1;

                        if(handle === 'last') {
                            getIndex = lastPos / average * average * dataLen / 100;
                        } else {
                            getIndex = firstPos / average * average * dataLen / 100;
                        }

                        getIndex = useComma ? parseInt(getIndex) : parseFloat(getIndex);

                        return getIndex + dataStartIndex;
                    }

                    // ���콺 �巡�� �̺�Ʈ
                    $target.on('mousedown' + obj.eventName, function(e) {
                        e.preventDefault();

                        var handle = '';

                        if($(e.target).hasClass('first')) {
                            handle = 'first';
                            $first.css('z-index', 10);
                            $last.css('z-index', 0);
                        } else if ($(e.target).hasClass('last')) {
                            handle = 'last';
                            $first.css('z-index', 0);
                            $last.css('z-index', 10);
                        }

                        $(document).bind('mousemove' + obj.eventName, function(e) {
                            moveSlider(e, handle, null, true);
                        });
                        $(document).bind('mouseup' + obj.eventName, function(e) {
                            $(document).unbind('mousemove' + obj.eventName);
                            $(document).unbind('mouseup' + obj.eventName);
                        });
                    });

                    if($firstChain) {
                        _onInput($firstChain);
                    }

                    if($lastChain) {
                        _onInput($lastChain);
                    }


                    // data-selected �Ӽ��� ���� ��� �ش� ����ŭ �̵�
                    if($last.attr('data-selected')) {
                        moveSlider(null, 'last', parseInt($last.attr('data-selected'), 10));
                    } else if ($last.length > 0) {
                        moveSlider(null, 'last', 0);
                    }

                    // data-selected �Ӽ��� ���� ��� �ش� ����ŭ �̵�
                    if($first.length > 0 && $first.attr('data-selected')) {
                        moveSlider(null, 'first', parseInt($first.attr('data-selected'), 10));
                    } else if ($first.length > 0) {
                        moveSlider(null, 'first', 0);
                    }

                    method = {
                        setFirst : function(index) {
                            moveSlider(null, 'first', index);
                        },
                        setLast : function(index) {
                            moveSlider(null, 'last', index);
                        },
                        getIndex : getIndex
                    };

                    $(this).data('range', method);
                });
            },

            /**
             * rangeSlider (�󼼰˻�)
             * $('.js-range-slider')
             */
            rangeSliderDetailSrch : function(settings) {
                var defaults = {
                    firstTarget : '.pointer.first',
                    lastTarget : '.pointer.last',
                    select : '.js-range-select'
                };

                return this.each(function() {
                    var config = $.extend({}, defaults, settings),
                        $target = $(this),
                        getTargetIndex = $target.index('.js-range-slider'),
                        $graph = $target.find('.graph'),
                        $first = $target.find(config.firstTarget),
                        $last = $target.find(config.lastTarget),
                        $select = $(config.select).eq(getTargetIndex),
                        $firstSelect = $select.find('select').eq(0),
                        $lastSelect = $select.find('select').eq(1),
                        position = {
                            first : 0,
                            last : 0
                        };

                    /**
                     * [selectChain �̺�Ʈ]
                     * @param  {[MOUSEEVENT]} e                     [���콺 �̺�Ʈ]
                     * @param  {[jQUery | HTMLElement]} otherSelect ['first' or 'last' select target]
                     * @param  {[String]} handle        ['last' or 'first']
                     * @return {[type]}                 []
                     */
                    function selectChain(e, otherSelect, handle) {
                        var $option = $(e.target).find('option'),
                            selectedIndex = $option.filter(':selected').index(),

                            otherSelectedIndex = otherSelect.find('option:selected').index(),
                            checkIndex = handle === 'last' ? selectedIndex < otherSelectedIndex : selectedIndex > otherSelectedIndex;

                        if(checkIndex) {
                            otherSelect.find('option').eq(selectedIndex).prop('selected', true);
                            otherSelect.trigger('change' + obj.eventName);
                        }

                        moveSlider(e, handle, selectedIndex);
                    }

                    /**
                     * [range slider �̺�Ʈ]
                     * @param  {[MOUSEEVENT]}  event
                     * @param  {[String]}  handle         ['first' or 'last']
                     * @param  {[number]}  moveIndex      [�̵���ų index ��]
                     * @param  {Boolean} isSelectChange [true�� ��� select change �̺�Ʈ trigger]
                     * @return {[type]}                 [description]
                     */
                    function moveSlider(event, handle, moveIndex, isSelectChange) {
                        event.preventDefault();
                        event.stopPropagation();

                        var offset = $target.offset().left,
                            getWidth = $target.innerWidth(),
                            getLeft = event.pageX - offset,
                            getPer = Math.ceil(getLeft / getWidth * 100),
                            //getPer = Math.round(getPer / 10) * 10;
                            average = 100 / ($firstSelect.find('option').length-1),
                            firstPos = position.first,
                            lastPos = position.last + position.first,
                            firstMove = 0,
                            lastMove = 0,
                            result = typeof moveIndex === 'number' ? moveIndex * average : Math.round(getPer / average) * average;

                        if(result < 0 || result > 100) {
                            return;
                        }

                        // last
                        if (handle === 'last') {
                            lastMove = result <= firstPos ? 0 : Math.abs(result - firstPos);

                            // last move
                            $graph.css('width', lastMove+'%');

                            position.last = lastMove;

                            // first
                        } else if (handle === 'first') {
                            firstMove = result >= lastPos ? lastPos : result;
                            lastMove = Math.abs(firstMove - lastPos);

                            // first move
                            $graph.css('margin-left', firstMove + '%');
                            $graph.css('width', lastMove + '%');

                            position.first = firstMove;
                            position.last = lastMove;
                        }

                        if(isSelectChange) {
                            firstPos = position.first;
                            lastPos = position.last + position.first;

                            $firstSelect.find('option').eq(position.first / average).prop('selected', true);
                            $lastSelect.find('option').eq(lastPos / average).prop('selected', true);
                        }
                    }

                    // ���콺 �巡�� �̺�Ʈ
                    $target.on('mousedown' + obj.eventName, function(e) {
                        e.preventDefault();

                        var handle = '';

                        if($(e.target).hasClass('first')) {
                            handle = 'first';
                            $first.css('z-index', 10);
                            $last.css('z-index', 0);
                        } else if ($(e.target).hasClass('last')) {
                            handle = 'last';
                            $first.css('z-index', 0);
                            $last.css('z-index', 10);
                        }

                        $(document).bind('mousemove' + obj.eventName, function(e) {
                            moveSlider(e, handle, null, true);
                        });
                        $(document).bind('mouseup' + obj.eventName, function(e) {
                            $(document).unbind('mousemove' + obj.eventName);
                            $(document).unbind('mouseup' + obj.eventName);
                        });
                    });

                    // first point select �ɼ� ����� �̺�Ʈ ����
                    $firstSelect.on('change' + obj.eventName, function(e) {
                        selectChain(e, $lastSelect, 'first');
                    });

                    // last point select �ɼ� ����� �̺�Ʈ ����
                    $lastSelect.on('change' + obj.eventName, function(e) {
                        selectChain(e, $firstSelect, 'last');
                    });

                    // data-selected �Ӽ��� ���� ��� �ش� ����ŭ �̵�
                    if($last.attr('data-selected')) {
                        $lastSelect.find('option').eq($last.data('selected')).prop('selected', true);
                        $lastSelect.trigger('change' + obj.eventName);
                    }

                    // data-selected �Ӽ��� ���� ��� �ش� ����ŭ �̵�
                    if($first.attr('data-selected')) {
                        $firstSelect.find('option').eq($first.data('selected')).prop('selected', true);
                        $firstSelect.trigger('change' + obj.eventName);
                    }

                });
            },

            /**
             * owm ���� �����̵�
             * @param opt �ɼ� ����
             *               opt.paging : paging list ������Ʈ
             *               opt.conWrap : �����̵� list�� ���δ� wrap
             *               opt.list : slide list
             *               opt.next : ���� ��ư�� Ŭ����
             *               opt.prev : ���� ��ư�� Ŭ����
             *               opt.activeClass : ���õ� list item�� ������ active Ŭ����
             *               opt.isAnimation : animation ��� ���� (�¿� ���)
             *               opt.autoPlay : auto play ��� ����
             *               opt.autoTimer : auto Ÿ�̸�
             *               opt.autoPlayBtn : auto play ��ư Ŭ����
             *               opt.autoStopBtn : auto stop ��ư Ŭ����
             *               opt.duration : �ִϸ��̼� �ӵ�
             *
             * @method next()
             * @method prev()
             * @method slideTo(index) �̵���ų index ��
             * @method autoPlay()
             * @method autoStop()
             * @example
             * $('slide-selector').data('owmSlider').method();

             * conWrap ������Ʈ�� data-isAnimation �Ӽ����� animation ���� ���� (default = true)
             * conWrap ������Ʈ�� data-isAuto �Ӽ����� auto play ���� ���� (default = false)
             */
            _setOwmSlider : function(settings) {
                var defaults = {
                    paging : '.paging',
                    pagingButton : 'a',
                    conWrap : '.slide-conwrap',
                    list : '.slide-list',
                    next : '.btn-next, .next',
                    prev : '.btn-prev, .prev',

                    activeClass : 'on',

                    isAnimation : true,
                    isLoop : false,

                    autoPlay : false,
                    autoTimer : 3000,
                    autoPlayBtn : '.play',
                    autoStopBtn : '.stop',

                    duration : 'fast',

                    showItem : 1 // ���� ������ ��õ best10 �����̵忡���� ����.
                };

                return this.each(function() {
                    var config = $.extend({}, defaults, settings),
                        $target = $(this),
                        $conWrap = $target.find(config.conWrap),
                        $paging = $target.find(config.paging),
                        $list = $conWrap.find(config.list),
                        $next = $target.find(config.next),
                        $prev = $target.find(config.prev),
                        $playBtn = $target.find(config.autoPlayBtn),
                        $stopBtn = $target.find(config.autoStopBtn),
                        autoSetTimer = null,
                        isAnimation = $conWrap.attr('data-isAnimation') ? ($conWrap.attr('data-isAnimation') === 'true') : config.isAnimation,
                        isAutoPlay = $conWrap.attr('data-isAuto') ? ($conWrap.attr('data-isAuto') === 'true') : config.autoPlay,
                        showItem = $conWrap.attr('data-showItem') ? parseInt($conWrap.attr('data-showItem'), 10) : config.showItem,
                        info = {
                            currentIndex : $list.children().filter('.on').length > 0 ? $list.children().filter('.on').index() : 0,
                            conWrapWidth : $conWrap.width(),
                            listLen : $list.children().length,
                            itemWidth : $list.children().outerWidth(true),
                            minIndex : 0,
                            maxIndex : (Math.ceil($list.children().length / showItem)-1) * showItem
                        },
                        method = {};

                    if($list.children().length <= 1) { return; }

                    function setup() {
                        $list.css({
                            width : (100 * info.listLen) + 10 + '%',
                            marginLeft : -(info.itemWidth * info.currentIndex) + 'px'
                        });

                        if(info.listLen <= showItem) {
                            $next.addClass('btn-disabled');
                            $prev.addClass('btn-disabled');
                        } else {
                            $next.removeClass('btn-disabled');
                            $prev.removeClass('btn-disabled');
                        }


                        $paging.empty();
                        for(var i=0, len=Math.ceil(info.listLen / showItem); i<len; i++) {
                            $paging.append('<a href="#"></a>');
                        }
                    }

                    // slideTo event.
                    function moveSlide(index, callback) {
                        var getIndex = index;

                        if(getIndex < info.minIndex) {
                            getIndex = info.maxIndex;
                        } else if (getIndex > info.maxIndex) {
                            getIndex = info.minIndex;
                        }

                        // isAnimation���� true�� ��� ��� ����
                        if(isAnimation) {
                            $list.stop(true, false).animate({
                                'margin-left' : -(info.itemWidth * getIndex) + 'px'
                            }, {
                                duration : config.duration,
                                complete : function() {
                                    if(typeof callback === 'function') {
                                        callback();
                                    }
                                }
                            });

                            // isAnimation���� false�� ��� ��� ���� (Ŭ������ �߰�/����)
                        } else {
                            $list.css('margin-left', -(info.itemWidth * getIndex)+'px');
                            if(typeof callback === 'function') {
                                callback();
                            }
                        }

                        info.currentIndex = getIndex;

                        if($paging.length > 0) {
                            changePaging(info.currentIndex);
                        }
                        onClassList(info.currentIndex);
                        onClassButton();

                        if(isAutoPlay && autoSetTimer) {
                            autoStop();
                            autoPlay();
                        }
                    }

                    // ���� �����̵�
                    function nextSlide() {
                        var getIndex = info.currentIndex + showItem;

                        if(getIndex === info.listLen) {
                            getIndex = 0;
                        }

                        moveSlide(getIndex);
                    }

                    // ���� �����̵�
                    function prevSlide() {
                        var getIndex = info.currentIndex - showItem;

                        if(getIndex < 0) {
                            getIndex = info.listLen-showItem;
                        }

                        moveSlide(getIndex);
                    }

                    // change paging class
                    function changePaging(index) {
                        var $currentSlide = $list.children().eq(index / showItem),
                            getIndex = $currentSlide.attr('data-paging') ? $currentSlide.attr('data-paging') : index,
                            $currentTarget = $paging.children().eq(getIndex / showItem),
                            $siblings = $currentTarget.siblings();

                        $currentTarget.addClass('on').attr('title', '����');
                        $siblings.removeClass('on').removeAttr('title');
                    }

                    // slide item on class
                    function onClassList(index) {
                        var $currentSlide = $list.children().eq(index),
                            $siblings = $currentSlide.siblings();

                        $currentSlide.addClass(config.activeClass);
                        $siblings.removeClass(config.activeClass);
                    }

                    // button disabled class 
                    function onClassButton() {
                        // loop mode �� true �̸� disabled Ŭ���� �������� ����
                        if(config.isLoop) { return; }

                        if(info.currentIndex === info.minIndex) {
                            $prev.addClass('btn-disabled');
                        } else {
                            $prev.removeClass('btn-disabled');
                        }

                        if(info.currentIndex === info.maxIndex) {
                            $next.addClass('btn-disabled');
                        } else {
                            $next.removeClass('btn-disabled');
                        }  
                    }

                    // auto btn bindEvent
                    function onAutoBtn() {
                        $playBtn.click(function() {
                            autoPlay();
                        });

                        $stopBtn.click(function() {
                            autoStop();
                        });
                    }

                    // auto play
                    function autoPlay() {
                        clearInterval(autoSetTimer);
                        autoSetTimer = setInterval(function() {
                            nextSlide();
                        }, config.autoTimer);

                        if($playBtn) { $playBtn.hide(); }
                        if($stopBtn) { $stopBtn.show(); }
                    }

                    // auto stop
                    function autoStop() {
                        clearInterval(autoSetTimer);
                        autoSetTimer = null;
                        if($playBtn) { $playBtn.show(); }
                        if($stopBtn) { $stopBtn.hide(); }
                    }

                    function bindEvents() {
                        $target.off('click.owmSlider');
                        $target.on('click.owmSlider', config.next + ', ' + config.prev, function(e) {
                            e.preventDefault();
                            e.stopPropagation();

                            var $target = $(e.target);

                            if($target.hasClass('btn-disabled')) {
                                return false;
                            }

                            if($target.attr('class') === $next.attr('class')) {
                                nextSlide();
                            } else if($target.attr('class') === $prev.attr('class')) {
                                prevSlide();
                            }
                        });

                        $list.off('focusin.owmSlider');
                        $list.on('focusin.owmSlider', 'a', function(e) {
                            if(isAutoPlay) {
                                autoStop();
                            }
                        });

                        $list.off('focusout.owmSlider');
                        $list.on('focusout', 'a', function(e) {
                            if(isAutoPlay) {
                                autoPlay();
                            }
                        });

                        // pdf ���� ������ data-paging ���
                        $paging.off('click.owmSlider');
                        $paging.on('click.owmSlider', config.pagingButton, function(e) {
                            e.preventDefault();
                            e.stopPropagation();

                            var $parent = $(this).parent().hasClass(config.paging.substring(1)) ? $(this) : $(this).parent(),
                                parentIndex = $parent.index(),
                                // data-paging�� ���� ��� �ش� ������Ʈ�� index ���� üũ
                                $dataPaging = $('[data-paging="' + parentIndex + '"]'),
                                getIndex = $dataPaging.length > 0 ? $dataPaging.filter(':first').index() : parentIndex;

                            moveSlide(getIndex * showItem);
                        });
                    }

                    // css setup
                    setup();
                    // �̺�Ʈ ����
                    bindEvents();
                    // �ʱ� �� ����
                    moveSlide(info.currentIndex);

                    // Auto Play
                    if(isAutoPlay) {
                        onAutoBtn();
                        autoPlay();
                    }

                    method.next = nextSlide;
                    method.prev = prevSlide;
                    method.slideTo = moveSlide;
                    method.autoPlay = autoPlay;
                    method.autoStop = autoStop;
                    method.refresh = function() {
                        info = {
                            currentIndex : $list.children().filter('.on').length > 0 ? $list.children().filter('.on').index() : 0,
                            conWrapWidth : $conWrap.width(),
                            listLen : $list.children().length,
                            itemWidth : $list.children().outerWidth(true),
                            minIndex : 0,
                            maxIndex : (Math.ceil($list.children().length / showItem)-1) * showItem
                        };

                        setup();
                        moveSlide(info.currentIndex);
                    };

                    $target.data('owmSlider', method);
                });
            },

            // �� ���� padding �� ����
            _setDetailChangePadding : function() {
                return this.each(function() {
                    var $tr = $(this).closest('tr'),
                        $boxCon = $(this).siblings('.box-con'),
                        boxHeight = 0;

                    if($tr.hasClass('on')) {
                        $tr.removeClass('on');
                        boxHeight = parseInt($tr.children().css('padding-bottom'), 10);
                        $tr.addClass('on');
                        boxHeight += parseInt($boxCon.innerHeight(), 10);
                        $tr.children().css('padding-bottom', boxHeight+'px');
                    }

                    $(this).on('click', function(e) {
                        e.preventDefault();

                        if($tr.hasClass('on')) {
                            boxHeight = parseInt($tr.children().css('padding-bottom')) - $boxCon.innerHeight() -11;
                            $tr.removeClass('on');
                            $tr.children().removeAttr('style');
                        } else {
                            $tr.addClass('on');
                            boxHeight += $boxCon.innerHeight()+11;
                            $tr.children().css('padding-bottom', boxHeight+'px');
                        }
                    });
                });
            },

            // main Top Banner
            _setOwmMainBanner : function() {
                return this.each(function() {
                    var $target = $(this),
                        $conWrap = $target.find('.main-top'),
                        $list = $conWrap.find('.top-list > ul').children(),
                        $playBtn = $conWrap.find('.btn-play'),
                        $stopBtn = $conWrap.find('.btn-stop'),

                        currentIndex = $list.filter('.on').length > 0 ? $list.filter('.on').index() : 0,
                        autoSetTimer = null,
                        animDuration = 800, // �ִϸ��̼� �ӵ�
                        autoTimer = animDuration * 6,

                        method = {};

                    if(!$list.length) { return; }

                    function currentTo(index) {
                        if($('.overcon').is(':animated')) { return; }
                        var $current = $list.eq(index),
                            $siblings = $current.siblings('.on'),
                            $curOvercon = $current.find('.overcon'),
                            $siblingsOvercon = $siblings.find('.overcon');

                        if($current.hasClass('on')) { return; }
                        $current.addClass('on');
                        $siblings.removeClass('on');

                        $curOvercon.hide();
                        $siblingsOvercon.show().fadeOut('fast', function() {
                            $curOvercon.fadeIn({
                                queue : false,
                                duration : animDuration
                            }).css({
                                bottom : '+=55'
                            }).animate({
                                bottom : '-=55'
                            }, {
                                duration : animDuration,
                                easing : 'easeOutBounce'
                            });

                            $(this).removeAttr('style');
                        });

                        currentIndex = index;
                    }

                    function nextItem() {
                        var index = currentIndex + 1;

                        if(index > $list.length - 1) {
                            index = 0;
                        }

                        currentTo(index);
                    }

                    // auto play
                    function autoPlay() {
                        clearInterval(autoSetTimer);
                        autoSetTimer = setInterval(function() {
                            nextItem();
                        }, autoTimer);

                        if($playBtn) { $playBtn.addClass('on'); }
                        if($stopBtn) { $stopBtn.removeClass('on'); }
                    }

                    // auto stop
                    function autoStop() {
                        clearInterval(autoSetTimer);
                        autoSetTimer = null;
                        if($playBtn) { $playBtn.removeClass('on'); }
                        if($stopBtn) { $stopBtn.addClass('on'); }
                    }

                    // �̺�Ʈ ����
                    function bindEvents() {
                        $list.on('click', '.tit', function(e) {
                            e.preventDefault();

                            var $parent = $(this).closest('li');

                            currentTo($parent.index());

                            if(autoSetTimer) {
                                autoStop();
                                autoPlay();
                            }
                        });

                        $list.on('focusin focusout', 'a', function(e) {
                            if (e.type === 'focusin') {
                                autoStop();
                            } else if (e.type === 'focusout') {
                                autoPlay();
                            }
                        });

                        $playBtn.on('click', autoPlay);
                        $stopBtn.on('click', autoStop);
                    }


                    // �ʱⰪ ����
                    $list.removeClass('on').find('.overcon').hide();
                    $list.eq(currentIndex).addClass('on').find('.overcon').show();

                    // �̺�Ʈ ����
                    bindEvents();

                    // auto play ����
                    autoPlay();

                    method.currentTo = currentTo;
                    method.autoPlay = autoPlay;
                    method.autoStop = autoStop;

                    $(this).data('topBanner', method);
                });
            },

            _setProductTab : function() {
                return this.each(function() {
                    var $tab = $(this).find('> ul'),
                        $tabLi = $tab.children();

                    // �޴� ����
                    $tabLi.off('click.productBanner')
                    $tabLi.on('click.productBanner', '.tit', function(e) {
                        e.preventDefault();
                        var $parent = $(this).closest('li'),
                            $parentSiblings = $parent.siblings();

                        $parent.addClass('on');
                        $parentSiblings.removeClass('on');
                    });
                });
            },
            setProductSlide : function() {
                return this.each(function() {
                    // // paging �缳��
                    // var $list = $(this).find('.l-wrap > ol > li'),
                    //     $indi = $(this).find('.indicator');

                    // $indi.empty();
                    // for(var i=0, len=Math.ceil($list.length / 3); i<len; i++) {
                    //     $indi.append('<a href="#"></a>');
                    // }

                    // $indi.children().eq($list.filter('.on').index() / 3).addClass('on');

                    // �����̵� �ʱ�ȭ
                    obj._setOwmSlider.call($(this), {
                        paging : '.indicator',
                        conWrap : '.list-con',
                        list : '.l-wrap > ol',
                        next : '.next',
                        prev : '.prev',
                        showItem : 3,

                        autoPlay : false,
                        isLoop: false
                    });

                    // Ȱ��ȭ ���°� �ƴ϶�� auto stop
                    if(!$(this).hasClass('on') && $(this).data('owmSlider')) {
                        $(this).data('owmSlider').autoStop();
                    }
                });
            },

            // �ݵ� ����Ʈ 10 fmkList �޴�
            _setFmkList : function() {
                return this.each(function() {
                    var $target = $(this);
                    if ( !$(this).find('.list-close').length ) {
                        return false;
                    }

                    $target.css('width', '100%');
                    $('.list-open, .list-close').css({
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%'
                    });

                    $target.on('click', '.list-close a', function(e) {
                        e.preventDefault();
                        var $fmkList = $(this).closest('.fmk-list'),
                            $listOpen = $fmkList.find('.list-open'),
                            $listClose = $fmkList.find('.list-close');

                        $fmkList.addClass('on');
                        $listClose.show().fadeOut();

                        $listOpen.hide().slideDown(function() {
                        });
                    });

                    $target.on('mouseleave', function() {
                        var $listOpen = $(this).find('.list-open'),
                            $listClose = $(this).find('.list-close');

                        $listOpen.slideUp();
                        $listClose.fadeIn();
                    });
                });
            },

            _quickMenuScroll : function() {
                return this.each(function(settings) {
                    var $target = $(this);

                    $(window).off('scroll.fixedScroll')
                    $(window).on('scroll.fixedScroll', function() {
                        var targetPostion = 600 + $target.innerHeight(),    // target ���� top ��ġ �� 
                            winHeight = $(window).height(),
                            domHeight = $(document).height(),
                            floorHeight = $('#footer').innerHeight(),
                            getBetweenHeight = domHeight - (floorHeight + $(window).scrollTop());

                        if(targetPostion >= getBetweenHeight) {
                            $target.css({
                                position: 'absolute',
                                top : $('#footer').offset().top - $target.innerHeight()+'px'
                            });
                        } else {
                            $target.removeAttr('style');
                        }
                    });
                });
            },

            _randomBg : function() {
                var defaults = {
                    bgs : ['/img/owm/ico_tit_bg01.png','/img/owm/ico_tit_bg02.png','/img/owm/ico_tit_bg03.png','/img/owm/ico_tit_bg04.png','/img/owm/ico_tit_bg05.png']
                }
                return this.each(function(settings) {
                    var config = $.extend({}, defaults, settings),
                        randomIdx = Math.floor(Math.random()*(config.bgs.length));

                    // console.log(randomIdx, config.bgs[randomIdx]);
                    $(this).css('background-image', 'url("'+config.bgs[randomIdx]+'")');

                    /* if(randomIdx !== 0) {
                        $(this).css('background-color', config.bgs[randomIdx]);
                    } else {
                        // �̹��� �Դϴ�.
                        $(this).css('background-image', 'url("'+config.bgs[randomIdx]+'")');
                    } 2017.04.19 */

                    // Ŭ���� �Դϴ�.
                    // $(this).addClass(config.bgs[randomIdx]);
                });
            }
        };

        return obj;
    })());
}